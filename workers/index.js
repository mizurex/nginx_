import { createClient } from "redis";


const redisClient = createClient();
redisClient.connect();
console.log("Connected to Redis");


//polling the redis database for new data

const polling = async()=>{
    while (true) {
 const res = await redisClient.brPop("data",0) //keep waiting for new data  
console.log(res);
 await new Promise((resolve)=> setTimeout(resolve, 1000));
}
}

polling();
