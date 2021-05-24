//  controller is where we’re going to define all of the Pokemon routes
import { Request, Response, Router } from 'express';
import { PokemonService } from "../services/pokemon.service";

export class PokemonController {
  public router = Router();
  
  constructor(private pokemonService: PokemonService) {
    this.setRoutes();
  }

  // Extracted the callback function to make it cleaner.
  // You can now see the two parameters it receives, the route and the callback functions, at a glance.
  public setRoutes() {
    this.router.get("/", this.sayHello);
  }

  private sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.pokemonService.getWelcomeMessage();
    res.send(welcomeMessage);
  };
}