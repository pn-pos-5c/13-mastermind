using System.Collections.Generic;
using Mastermind.DTOs;
using Mastermind.Services;
using Microsoft.AspNetCore.Mvc;

namespace Mastermind.Controllers
{
    [Route("api/games")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly GameService gameService;

        public GameController(GameService gameService)
        {
            this.gameService = gameService;
        }

        [HttpPost]
        public IActionResult AddNewGame([FromBody] GameDto game)
        {
            return Ok(gameService.AddNewGame(game));
        }

        [HttpGet]
        [Route("colors")]
        public IActionResult GetColors()
        {
            return Ok(gameService.GetColors());
        }

        [HttpPost]
        [Route("guess/{gameId}")]
        public IActionResult SubmitGuess(string gameId, [FromBody] List<string> guess)
        {
            var guessResult = gameService.SubmitGuess(gameId, guess);
            if (guessResult == null) return BadRequest("Game not found");
            return Ok(guessResult);
        }
    }
}
