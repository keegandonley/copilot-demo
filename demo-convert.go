// Use this file to test converting between languages
package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	input, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	if strings.HasSuffix(input, "!") {
		fmt.Println("You're excited!")
	} else {
		fmt.Println("Did you say something?")
	}
}
