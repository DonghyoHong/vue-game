import Vuex from "vuex";

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0
}

const plantMine = (row, cell, mine) => {
    const candidate = Array(row * cell).fill().map((err, i) => {
        return i;
    });
    const shuffle = [];
    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(CODE.NORMAL);
        }
    }

    for (let k = 0; k < shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }

    console.log(data);
    return data;
}

export default new Vuex.Store({
    namespaced: true,
    state: {
        tableData: []
        , data: {
            row: 0
            , cell: 0
            , mine: 0
        }
        , timer: 0
        , halted: true //게임이 중단된
        , result: ''
        , openedCount: 0
    },//vue의 data와 비슷
    getters: {},//vue의 cumputed와 비슷
    mutations: {
        [START_GAME](state, {row, cell, mine}) {
            state.data = {
                row,
                cell,
                mine
            };
            state.tableData = plantMine(row, cell, mine);
            state.timer = 0;
            state.halted = false; //타이머 실행
            state.openedCount = 0;
        }
        , [OPEN_CELL](state, {row, cell}) {
            let openedCount = 0;
            const checked = [];

            function checkAround(row, cell) {
                let checkRowCellRowUndefined = row < 0 || row >= state.tableData.length || cell < 0 || cell >= state.tableData[0].length;
                if (checkRowCellRowUndefined) {
                    return;
                }
                if ([CODE.OPENED, CODE.FLAG_MINE, CODE.FLAG, CODE.QUESTION_MINE, CODE.QUESTION].includes(state.tableData[row][cell])) {
                    return;
                }

                if (checked.includes(row + '/' + cell)) {
                    return;
                } else {
                    checked.push(row + '/' + cell);
                }

                console.log(checked);

                let around = [];
                if (state.tableData[row - 1]) {
                    around = around.concat(
                        state.tableData[row - 1][cell - 1]
                        , state.tableData[row - 1][cell]
                        , state.tableData[row - 1][cell + 1]
                    );
                }

                around = around.concat(
                    state.tableData[row][cell - 1]
                    , state.tableData[row][cell + 1]
                );
                if (state.tableData[row + 1]) {
                    around = around.concat(
                        state.tableData[row + 1][cell - 1]
                        , state.tableData[row + 1][cell]
                        , state.tableData[row + 1][cell + 1]
                    );
                }


                const counted = around.filter(function (v) {
                    return [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v);
                });


                if (counted.length === 0 && row > -1) { //주변칸에 지뢰가 하나도 없는 경우
                    const near = [];
                    if (row - 1 > -1) {
                        near.push([row - 1, cell - 1]);
                        near.push([row - 1, cell]);
                        near.push([row - 1, cell + 1]);
                    }
                    near.push([row, cell - 1]);
                    near.push([row, cell + 1]);
                    if (row + 1 < state.tableData.length) {
                        near.push([row + 1, cell + 1]);
                        near.push([row + 1, cell]);
                        near.push([row + 1, cell + 1]);
                    }

                    near.forEach((v) => {
                        if (state.tableData[v[0]][v[1]] !== CODE.OPENED) {
                            checkAround(v[0], v[1]);
                        }
                    });
                }
                if (state.tableData[row][cell] === CODE.NORMAL) {
                    openedCount += 1;
                }
                state.tableData[row][cell] = counted.length;
            }

            checkAround(row, cell);

            let halted = false;
            let result = '';
            if (state.data.row * state.data.cell - state.data.mine === state.openedCount + openedCount) {
                halted = true;
                result = `${state.timer}초안에 승리하였습니다.`;
            }
            state.openedCount += openedCount;
            state.halted = halted;
            state.result = result;
        }
        , [CLICK_MINE](state, {row, cell}) {
            state.halted = true;
            state.tableData[row][cell] = CODE.CLICKED_MINE;
        }
        , [FLAG_CELL](state, {row, cell}) {
            if (state.tableData[row][cell] === CODE.MINE) {
                state.tableData[row][cell] = CODE.FLAG_MINE;
            } else {
                state.tableData[row][cell] = CODE.FLAG;
            }
        }
        , [QUESTION_CELL](state, {row, cell}) {
            if (state.tableData[row][cell] === CODE.FLAG_MINE) {
                state.tableData[row][cell] = CODE.QUESTION_MINE;
            } else {
                state.tableData[row][cell] = CODE.QUESTION;
            }
        }
        , [NORMALIZE_CELL](state, {row, cell}) {
            if (state.tableData[row][cell] === CODE.QUESTION_MINE) {
                state.tableData[row][cell] = CODE.MINE;
            } else {
                state.tableData[row][cell] = CODE.NORMAL;
            }
        }
        , [INCREMENT_TIMER](state) {
            state.timer += 1;
        }
    },//state를 수정할 떄 사용, 동기적으로
    actions: {}//비동기를 사용할 떄, 또는 여러 뮤테이션을 연달아 실행할 때
});