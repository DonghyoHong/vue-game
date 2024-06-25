import {createRouter, createWebHistory} from "vue-router";
import GameMatcher from "Components/gane-matcher/GameMatcher.vue";
import Minesweeper_App from "Components/minesweeper/Minesweeper_App.vue";
import ticTacToe_Slot from "Components/tictactoeVuexSlot/TicTacToe_Slot.vue";
import ParentLottoBall from "Components/lottogame/ParentLottoBall.vue";


const routes = [
    {
        path: "/game/:name"
        , component: GameMatcher
    }
    , {
        path: "/lottoGame"
        , component: ParentLottoBall
    }
    , {
        path: "/tictactoeVuexSlot"
        , component: ticTacToe_Slot
    }
    , {
        path: "/minesweeper"
        , component: Minesweeper_App
    }
];

const router = createRouter({
    history: createWebHistory()
    , routes
});

export default router;