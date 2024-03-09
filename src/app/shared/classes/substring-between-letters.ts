export class SubstringBetweenLetters {
  getSubstringBetweenLetters(
    text: string,
    startLetter: string,
    endLetter: string
  ): string {
    const startIndex = text.indexOf(startLetter);
    const endIndex = text.lastIndexOf(endLetter) + 1; // Include endLetter

    if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
      return text.slice(startIndex, endIndex);
    } else {
      return ''; // Return empty string if letters not found or in wrong order
    }
  }
  getSubstringUntilLetter(text: string, letter: string): string {
    const index = text.indexOf(letter);
    if (index !== -1) {
      return text.slice(0, index);
    } else {
      return text; // Return entire string if letter not found
    }
  }
  getSubstringFromLetterToEnd(text: string, startLetter: string): string {
    const startIndex = text.indexOf(startLetter)+1;
    if (startIndex !== -1) {
      return text.slice(startIndex); // Slice from startIndex to the end
    } else {
      return ''; // Return empty string if letter not found
    }
  }
}
