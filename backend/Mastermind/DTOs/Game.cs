using System.Collections.Generic;

namespace Mastermind.DTOs
{
    public class Game
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Tries { get; set; }
        public List<string> Code { get; set; }
        public List<Guess> GuessHistory { get; set; } = new List<Guess>();
    }
}
