## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
yarn install

```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

## Documentation

localhost:3000/api

## Logic
1. Three main modules were created Reservation, Auth and Rate
2. The Reservation module has controllers to create, update a reservation to paid, delete and get all reservation and get one by ID
3. The Auth module is to create an account and sign into he app to get an access token
4. The Rate module involve a controller to get rate and also the contoller to get rate if a user has over stayed just by inputting the start date and end date, considering if it falls with a weekend or weekday and adding the charges
5. The Reservation and Rate module are protectes routes


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
