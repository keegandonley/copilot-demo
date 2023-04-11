# Use brunch "debug" to add debugging statements

sentences_to_index = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a powerful scripting language.",
    "Arrays in JavaScript can store data of different types.",
    "You can use the 'for' loop to iterate over arrays or other data structures in JavaScript.",
    "There are many popular frameworks and libraries for building web applications with JavaScript, such as React, Angular, and Vue.",
]

class Indexer:
    def init(self, sentences):
        self.sentences = sentences

    def find(self, query):
        indices = []
        for index, sentence in enumerate(self.sentences):
            if query in sentence:
                indices.append(index)

        result = []
        for index, sentence in enumerate(self.sentences):
            if index in indices:
                result.append(sentence)

        print(result)


def main():
    indexer = Indexer()
    indexer.init(sentences_to_index)
    indexer.find("can")

main()