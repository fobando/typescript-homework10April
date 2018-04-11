import atm from './lib/AtmClass';

const port = 3000;

atm.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    
    return console.log("Server is listening on port 3000");
})