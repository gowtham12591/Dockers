# FROM node:latest
# WORKDIR /app           
# ADD . .                
# RUN npm install        
# CMD node index.js      
                       
## Use the app folder for working directory inside the container, if not there then create and use it                       
## Add everythin in this directory to the working directory (/app)
## To install all the dependencies
## Running the index.js file using node command
## It will share a port where it is listening the transmitted message. 
## We can check it by going to the browser and then check it using localhost:3000(port no) 


## Second usecase with caching

# FROM node:latest
# WORKDIR /app
# ADD package*.json ./
# RUN npm install
# ADD . .                
# CMD node index.js 

## package*.json . helps in adding all the packages needed to the working directiory - If there is an error during build then use below command
## package*.json ./ is needed sometimes, as when using ADD with more than one source file, the destination must be adirectory and end with /
## npm install will install the required 

## Third usecase with alpine

# FROM node:alpine
# WORKDIR /app
# ADD package*.json ./
# RUN npm install
# ADD . .                
# CMD node index.js 

## Fourth usecase with alpine

FROM node:16.17.1-alpine3.15
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .                
CMD node index.js 