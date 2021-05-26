const amqp = require("amqplib");

connect();

async function connect() {
    try {
        // create connection to my server, returns a promise so need the await
        const connection = await amqp.connect("amqp://localhost:5672");
        
        // create channel, different channel from publisher different tcp connections!!
        const channel = await connection.createChannel();
        
        // make sure queue exists and if not creates it called "jobs" or whatever you want
        const result = await channel.assertQueue("jobs");

        // need to keep the consumer alive whereas the publisher can be killed after
        // .consume give it a queue, and then call this function when message comes in
        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Recieved job with input ${input.number}`)
            // acknowledge the message and let server know its save to remove from queue!!!
            if (input.number == 8) 
                channel.ack(message);
        })
        console.log("Waiting for messages...")
    
    }
    catch (ex){
        console.error(ex)
    }

}