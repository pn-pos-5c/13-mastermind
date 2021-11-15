using Mastermind.DTOs;
using Mastermind.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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

        [HttpGet]
        [Route("{gameId}")]
        public IActionResult GetGame(string gameId)
        {
            var game = gameService.GetGame(gameId);
            if (game == null) return BadRequest("Game not found");
            return Ok(game);
        }

        [HttpGet]
        [Route("guessHistory/{gameId}")]
        public IActionResult GetGuessHistory(string gameId)
        {
            var guessHistory = gameService.GetGuessHistory(gameId);
            if (guessHistory == null) return BadRequest("Game not found");
            return Ok(guessHistory);
        }
    }
}
