# Random Password Generator


## Description

This wep page allows the user to generate a random password, based on their choices from several options. They must choose a password length between 8 and 128 characters, and decide whether or not to include lowercase and uppercase letters, numbers, and special characters. Once they've made their decision, a random password is generated based on their chosen criteria.

## Usage

The password generation process is triggered by clicking a button on the webpage, and is continued in a series of prompts and confirms, which eventually return a randomly-generated password to the box on the page. 

The webpage will appear as follows:

![screenshot of webpage](images/Screenshot%202022-11-10%20162126.png)

and can be viewed live on the web [here](https://eawiggans.github.io/passgen/).

## Credits

I used the Fisher-Yates algorithm to randomize the master character array for the password.
Benjamin White suggested during office hours that we pull one character from each set as it was selected to ensure all chosen types are included.