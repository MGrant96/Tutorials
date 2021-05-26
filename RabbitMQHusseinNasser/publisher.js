const amqp = require("amqplib");

// Take argument from user
const msg = {number: process.argv[2]}

connect();

async function connect() {
    try {
        // create connection to my server, returns a promise so need the await
        const connection = await amqp.connect("amqp://localhost:5672");
        
        // create channel
        const channel = await connection.createChannel();
        
        // make sure queue exists and if not creates it called "jobs" or whatever you want
        const result = await channel.assertQueue("jobs");

        // send a job to the jobs queue, job is msg
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log(`Job sent successfully ${ msg.number }!`);

        // Can close/kill these now 
        await channel.close();
        await connection.close();
    }
    catch (ex) {
        console.error(ex);
    }
}