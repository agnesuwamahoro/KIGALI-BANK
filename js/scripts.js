var BankAccount = {
    money: 0,
    name:"",
    withdraw: function(amount) 
        {this.money = this.money - amount;
        this.name = this.name;
    },
    deposit: function(amount) 
        {
          this.money = this.money + amount;
          this.name=this.name
    }
};

$(document).ready(function() 


 { var newAccount = Object.create(BankAccount);

  $("form#newBk").submit(function(event) 
   { event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedBalance = parseInt($("input#initial").val());

    newAccount.name = inputtedName;
    newAccount.deposit(inputtedBalance);
    $(".agnes").text(newAccount.name);


    $(".balance").text(newAccount.money);
  });


  $("form#depo").submit(function(event) 

    {event.preventDefault();


    var newBalance = parseInt($("input#deposit").val());


    newAccount.deposit(newBalance);

    $(".balance").text(newAccount.money);
 
  });


  $("form#withdraw").submit(function(event) 
    {event.preventDefault();

    var newBalance = parseInt($("input#withdraw").val());


    newAccount.withdraw(newBalance);

    $(".balance").text(newAccount.money);

  });
});
