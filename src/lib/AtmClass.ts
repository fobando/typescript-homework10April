import * as express from 'express';

class AtmClass {

    currentBalance : number;
    accountNumber : string;

    public express
  
    // The constructor for the ATM class only specifies a signature without any code
    constructor () {
        this.express = express();
        this.mountTheRoutes();
     }

    private mountTheRoutes() : void {
        const router = express.Router();
        
        router.get("/atm", (req,resp)=>{
            resp.json ({ status : 0, message : "OK"});
        })
        
        router.get("/atm/:account", (req,resp)=>{
            this.accountNumber = req.params.account;
            this.currentBalance = 0;

            resp.json({
                account : req.params.account,
                balance : 0
                })
        })
        
        router.get("/atm/withdraw/:account/amount/:amount", (req,resp)=>{
            if (req.params.account == this.accountNumber ){
                this.currentBalance = this.currentBalance - parseFloat(req.params.amount);
                resp.json({
                    account : req.params.account,
                    balance : this.currentBalance
                    })
            }
            else {
                resp.json ({ message : "ERR Invalid Account"});
            }   
        })
        
        router.get("/atm/deposit/:account/amount/:amount", (req,resp)=>{
            if (req.params.account == this.accountNumber){
                this.currentBalance = this.currentBalance + parseFloat(req.params.amount);
              
                resp.json({
                    account : req.params.account,
                    balance : this.currentBalance
                    })
             }
             else {
                resp.json ({ message : "ERR Invalid Account"});
             }
        })

        this.express.use("/",router);
     }
}

export default new AtmClass().express
