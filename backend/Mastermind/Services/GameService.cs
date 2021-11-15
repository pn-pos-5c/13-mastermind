using Mastermind.DTOs;
using System;
using System.Collections.Generic;

namespace Mastermind.Services
{
    public class GameService
    {
        private readonly Random random = new Random();
        private readonly List<string> colors = new List<string> { "blue", "green", "red", "yellow", "orange", "purple" };
        private List<Game> games = new List<Game>();

        public GameResponseDto AddNewGame(GameDto gameDto)
        {
            var game = new Game
            {
                Id = GenerateId(),
                Name = gameDto.Name,
                Tries = gameDto.Tries,
                Code = GenerateCode()
            };

            games.Add(game);
            return new GameResponseDto
            {
                Id = game.Id,
                Name = game.Name,
                Tries = game.Tries
            };
        }

        public List<string> GetColors()
        {
            return colors;
        }

        public Guess SubmitGuess(string gameId, List<string> colors)
        {
            var game = games.Find(game => game.Id.Equals(gameId));
            if (game == null) return null;
            var guess = new Guess { Colors = colors };

            for (var i = 0; i < 4; i++)
            {
                if (guess.Colors[i].Equals(game.Code[i])) guess.CorrectSlot++;
                else if (game.Code.Contains(guess.Colors[i])) guess.CorrectColor++;
            }

            game.GuessHistory.Add(guess);
            return guess;
        }

        private string GenerateId()
        {
            char[] chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".ToCharArray();
            string id = "";

            for (int i = 0; i < 6; i++)
            {
                id = $"{id}{chars[random.Next(51)]}";
            }

            return id;
        }

        private List<string> GenerateCode()
        {
            var code = new List<string>();

            for (int i = 0; i < 4; i++)
            {
                code.Add(colors[random.Next(5)]);
            }

            return code;
        }

        public GameResponseDto GetGame(string gameId)
        {
            var game = games.Find(game => game.Id.Equals(gameId));
            if (game == null) return null;

            return new GameResponseDto
            {
                Id = game.Id,
                Name = game.Name,
                Tries = game.Tries
            };
        }

        public List<Guess> GetGuessHistory(string gameId)
        {
            var game = games.Find(game => game.Id.Equals(gameId));
            return game?.GuessHistory;
        }
    }
}
