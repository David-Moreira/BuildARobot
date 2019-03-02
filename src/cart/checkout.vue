<template>
    <div class="checkout-page flex-container">
        <div class="nav nav-left" :class="{'nav-inactive':!this.backwardVisible()}" @click="backward" >
            <i class="fas fa-2x fa-arrow-left"></i>
        </div>
        <div v-if="currentStep == 1" class="step step-1">
            <h1>Perfonal Info</h1>
             <div class="form-inputs ccinfo">
                    <div>
                        <input id="name" type="text" placeholder="name" aria-label="name" v-model="name" 
                        />
                    </div>
                    <div >
                        <input id="lastName" type="text" placeholder="lastName" aria-label="lastName" v-model="lastName" 
                        />
                    </div>
                    <div >
                        <input id="email" type="text" placeholder="email" aria-label="email" v-model="email"
                        />
                    </div>
                </div>
        </div>
        <div v-if="currentStep == 2" class="step step-2">
                <div class="header">
                    <h1>
                        Payment Info
                    </h1>
                </div>
                <div class="form-inputs ccinfo">
                    <div class="cardname">
                        <input id="ccname" type="text" placeholder="name on card" aria-label="name on card" v-model="cardName"
                        />
                    </div>
                    <div class="cardnumber">
                        <input id="ccnumber" type="text" placeholder="card number" aria-label="card number" v-model="cardNumber"
                        />
                    </div>
                    <div class="cardexp">
                        <input id="ccexp" type="text" placeholder="expiration" aria-label="expiration" v-model="cardExp"
                        />
                    </div>
                    <div class="cardcvc">
                        <input id="cccvc" type="text" placeholder="cvc number" aria-label="cvc number" v-model="cardCvc"
                        />
                    </div>
                </div>
        </div>
        <div v-if="currentStep == 3" class="step step-3">
            <div class="header">
                    <h1>
                        Billing Address
                    </h1>
                </div>
                <div class="form-inputs ">
                    <div >
                        <input id="ccaddress" type="text" placeholder="address" aria-label="address" v-model="address" 
                        />
                    </div>
                    <div >
                        <input id="cccity" type="text" placeholder="city" aria-label="city" v-model="city"  />
                    </div>
                    
                    <div >
                        <input id="cczip" type="text" placeholder="postalcode" aria-label="postalcode" v-model="postalCode"  />
                    </div>
                </div>
        </div>
        <div v-if="currentStep == 4" class="step step4">
             <div class="header">
                    <h1>
                        Order Confirmation
                    </h1>
                </div>
                <div class="ordersummary">
                    You are buying: <strong> {{numberOfBots}} </strong> Robots for a total of <strong>{{totalCost}} €</strong>
                    <p>If all looks good, please click on the purchase button to finalize the transaction!</p>
                    <button id="submit-purchase">PURCHASE</button>
                </div>
        </div>
        <div class="nav nav-right" :class="{'nav-inactive':!this.forwardVisible()}" @click="forward">

            <i class="fas fa-2x fa-arrow-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:"checkout",
    data(){
        return {
            currentStep: 1,
            name: "",
            lastName: "",
            email: "",
            cardName: "",
            cardNumber: "",
            cardExp: "",
            cardCvc: "",
            address: "",
            city: "",
            postalCode: "",
            numberOfBots: this.$store.state.cart.length,
            totalCost: this.$store.state.cart.map(x=> x.cost).reduce((ac,y)=> ac += y)
        }
    },
    methods:{
        forward(){
            if (this.forwardVisible())
                this.currentStep++;
        },
        backward(){
            if (this.backwardVisible())
                this.currentStep--;
        },
        forwardVisible(){
            return this.currentStep < 4;
        },
        backwardVisible(){
            return this.currentStep > 1;
        }
    },
}
</script>

<style lang="scss" >

  .flex-container {
    display: flex;
    flex-direction: row;
    &.checkout-page{
        justify-content: center;
    }
    .nav{
        align-self: flex-start;
        padding:10px;
        color:white;
        background-color:green;
        border: 1px solid white;
        border-radius:25px;
        margin: 20px;
        &:hover{
            color:green;
            background-color:white;
            border: 1px solid green;
        }
        &.nav-inactive{
            background-color:grey;
            opacity:0.6;
            &:hover{
                color:white;
                background-color:grey;
                border: 1px solid white;
        }
        
        }
    }
    .step{
        width: 400px;
        text-align:center;
        align-self: auto;
        input{
            width: 90%;
            margin-bottom:15px;
            padding:5px;
            padding-right: 0px;
        }
    }
  }
  .flex-col {
    flex-direction: column;
  }
</style>
