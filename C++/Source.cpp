#include <iostream>
#include <cmath>

int main() {
	std::cout << "Choose a mode:\nString to Number (1)\nNumber to String (2)" << std::endl;
	int mode;
	std::cin >> mode;
	if (mode == 1) {
		std::cout << "Enter the desired string (max: 13 characters, no spaces)" << std::endl;
		std::string InputString;
		std::cin >> InputString;
		unsigned long long Number = 0;
		for (int i = 0; i < InputString.size(); i++) {
			int character = InputString[i];
			unsigned long long Factor = 1;
			for (int j = 0; j < (InputString.size()-(i+1)); j++) {
				Factor = Factor * 26;
			}
			Number = Number + ((character - 96) * Factor);
		}
		std::cout << Number << std::endl;
	}
	else {
		std::cout << "Enter the desired integer (max: 18,446,744,073,709,551,615)" << std::endl;
		unsigned long long n;
		std::cin >> n;
		char str[14];
		int i = 0;
		while (n != 0) {
			int character = n % 26;
			if (character == 0) {
				character = 26;
			}
			str[i] = 96 + character;
			n = (n - character) / 26;
			i++;
		}
		for (int j = (i-1); j > -1; j--) {
			if (str[j] != NULL) {
				std::cout << str[j];
			}
		}
	}
}