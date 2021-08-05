# Trivia Frontend

This is the frontend of my personal project

## How to Run

Running this project with Docker is fairly straightforward and can be done using two commands:

```console
user:~$ docker pull tuktukmaster/trivia-frontend:latest
user:~$ docker run -p 3000:80 tuktukmaster/trivia-frontend:latest
```

Alternatively you can simply run `npm install` and then `npm start`
## Why I Did the Project

I did the project for two reasons. First, I really love writing Go code for whatever reason and this was a nice opportunity to write some (fairly) complex stuff given the websockets and lobbies. Second, I wanted to have some project to showcase that I knew how to program and this seemed fairly fun to playtest.

## Technologies Used on Frontend

Built using Docker and React with React Router and W3CWebSocket. Languages used were JavaScript and CSS.

## Next Steps

I'm currently wanting to deploy this using Terraform on AWS but I haven't had time yet this summer. I also need to add testing and ideally have a complete CI/CD pipeline built. Additionally there's a lot of polishing that needs to 

# Contributors

- Berke Lunstad