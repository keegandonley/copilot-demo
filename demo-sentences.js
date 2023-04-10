const sentencesToIndex = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a powerful scripting language.",
  "Arrays in JavaScript can store data of different types.",
  "You can use the 'for' loop to iterate over arrays or other data structures in JavaScript.",
  "There are many popular frameworks and libraries for building web applications with JavaScript, such as React, Angular, and Vue.",
];

// This gives the correct results, but it's a terrible solution.
// Let's see if copilot can help us improve it.
class Indexer {
  init(sentences) {
    this.sentences = sentences;
  }

  find(query) {
    let indices = [];
    this.sentences.forEach((sentence, index) => {
      if (sentence.includes(query)) {
        indices.push(index);
      }
    });

    let result = [];
    this.sentences.forEach((sentence, index) => {
      if (indices.includes(index)) {
        result.push(sentence);
      }
    });

    console.log(result);
  }
}

const indexer = new Indexer();
indexer.init(sentencesToIndex);
indexer.find("can");
