import Vuex from "vuex";

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({
    namespaced: true,
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
        , turn: 'O'
        , winner: ''
    },//vue의 data와 비슷
    getters: {
        turnMessage(state) {
            return state.turn + "님이 승리 하였습니다.";
        }
    },//vue의 cumputed와 비슷
    mutations: {
        [SET_WINNER](state, winner) {
            state.winner = winner;
        }
        , [CLICK_CELL](state, {row, cell}) {
            console.log(state.turn);
            console.log(row, cell);
            state.tableData[row][cell] = state.turn;
        }
        , [CHANGE_TURN](state) {
            state.turn = state.turn === 'O' ? 'X' : 'O';
        }
        , [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ];
        }
        , [NO_WINNER](state) {
            state.winner = '';
        }
    },//state를 수정할 떄 사용, 동기적으로
    actions: {}//비동기를 사용할 떄, 또는 여러 뮤테이션을 연달아 실행할 때
});