import { Random } from "random-js"
const random = new Random()

export function randomNumber(min: number, max: number) {
    return random.integer(min, max)
}