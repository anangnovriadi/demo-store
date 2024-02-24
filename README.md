# demo-store

## Features
- Express JS
- Sequelize (ORM)

## Installation & Running Project

### Step 1: Install package modules
        
    npm install

### Step 2: Environment configuration
        
    cp .env.example .env

### Step 3: Run migration
        
    npm run migrate

### Step 4: Run seeder
        
    npm run seeder

### Step 5: Run application
    
    npm run dev

### Step 5: Run application
    
    npm run test

### API
    
    1. [GET] /products => this endpoint will get all list of product
   
    2. [GET] /product/:id => this endpoint will get detail of product
   
    3. [GET] /cart/:product_id => this endpoint will check product can add to cart or not
   
    4. [POST] /checkout => this api for send data order like qty, sub_total and also get total_price in response result

### Postman Doc: https://documenter.getpostman.com/view/4835843/2sA2rCUgo6

## License

[anangnovriadi](https://github.com/anangnovriadi)