import { Scene } from "../base";
import { Hintable, Hinter, Player, Renderer } from "../interface";
import Pos from "../types/position";
import { EnhancedCanvasRenderingContext2D } from "../utils/enhance-ctx";
import { Fontable } from "../options/FontOptions";
import { Shadowable } from "./../options/shadow-options";
interface Component extends Fontable, Shadowable, Hintable {
    scene: Scene;
    ctx: EnhancedCanvasRenderingContext2D | CanvasRenderingContext2D;
    renderer: Renderer;
    player: Player;
    pos: Pos | ((n: number) => Pos);
    alpha: number | ((n: number) => number);
    update(): void;
    preRender(): void;
    render(): void;
    draw(): void;
    hinter: Hinter;
}
export { Component };
