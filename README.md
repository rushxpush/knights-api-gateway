# Knights Api Gateway

## Porque o Api Gateway não está no monorepo do knights-backend?

Decidi separar o Api Gateway mais por uma questão didática do que por uma questão de facilidade de uso ou mesmo facilidade de organização. Como esse projeto se trata de uma maneira de desenvolver minhas habilidades lidando com todo tipo de situação não foquei tanto em desenhar uma arquitetura bonitinha desde o começo. A ideia do projeto é justamente me encurralar propositalmente e ver como me viro para resolver problemas de arquitetura, refatoração, versionamento, etc. 

Num mundo ideal teriamos sempre um projeto organizadinho e sempre utilizando as boas praticas do desenvolvimento. Mas como sabemos muito bem, no mundo real as coisas acabam acontecendo de maneira muito diferente. Muitas vezes herdamos projetos que só se mantem de pé a base de muito cuspe e palito de dente e temos que nos virar para entregar as features tão desejadas em um prazo curto demais. Não estou reclamando, entendo as necessidades do mercado, e por isso mesmo abracei nesse projeto a ideia de avançar rápido, quebrar coisas, consertar outras tantas e aprender pra caramba.

É como dizem, é na dor que as lições mais valiosas são aprendidas. Mas isso não quer dizer que estou fazendo o projeto de qualquer jeito. De maneira alguma. A ideia é justamente usar esse projeto para me tornar cada vez mais um desenvolvedor melhor. Por isso esse projeto tem testes unitários, tem documentação e está sempre sendo atualizado para utilizar as melhores práticas de desenvolvimento de software. Mas no final das contas, essa é minha caixinha de areia e nela estou sempre experimentando, utilizando tecnologias novas (ou velhas hehe) e tentando ao máximo estar acompanhando as inovações que aparecem no mercado.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Portas de Microserviços

3000: API Gateway
3001: Knights Backend
3002: Auth Service
5044: Logger Service

## RabbitMQ Queues

auth_queue

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
