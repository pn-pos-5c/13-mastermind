using System.Collections.Generic;

namespace Mastermind.DTOs
{
    public class Guess
    {
        public List<string> Colors { get; set; }
        public int CorrectSlot { get; set; }
        public int CorrectColor { get; set; }
    }
}
