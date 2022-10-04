<?php 

//learn more about action hooks, error handling in this really needs it
function stripeErrorHandling(callable $callback, $args = null) {
          try {
              return  $callback($args);
          } catch (\Stripe\Exception\CardException $e) {
               return [];
          } catch (\Stripe\Exception\RateLimitException $e) {
               // Too many requests made to the API too quickly
          } catch (\Stripe\Exception\InvalidRequestException $e) {
               return [];
          } catch (\Stripe\Exception\AuthenticationException $e) {
               // Authentication with Stripe's API failed
               // (maybe you changed API keys recently)
          } catch (\Stripe\Exception\ApiConnectionException $e) {
               // Network communication with Stripe failed
          } catch (\Stripe\Exception\ApiErrorException $e) {
               // Display a very generic error to the user, and maybe send
               // yourself an email
          } catch (Exception $e) {
               // Something else happened, completely unrelated to Stripe
               return [];
          }
}

function stripeClient () {
     $client = new Stripe();
     return $client->stripeClient;
}
class Stripe {
     private $pk = 'sk_test_51KR12VC6yP4tONR77gaPex8PvSdlxl1ynq01mHFVm6dYP6J9EEULPHLxoMY3koRSQXkC5ydqPFeh7PTj8UqyhZ6900DDrcbSWJ';
     public $stripeClient;
     function __construct()
     {
          $this->createConnection();
     }
     function createConnection () {
          $this->stripeClient = new \Stripe\stripeClient($this->pk);
          return $this->stripeClient;
     }
  

     
}
class Customer extends Stripe  {

     function __construct()
     {
          $this->createConnection();
     }

     public  function create_customer($customerId = null)
     {

          $user = new User($customerId);
          $customer = $this->get_customer($user->info['payments']['id']);
          if ($customer['deleted'] == true || $user->info['payments']['id'] == null) {

               $stripeID =  $this->stripeClient->customers->create([
                    'email' => $user->info['email'],
                    'description' => $user->info['username'],
                    'metadata' => [
                         'user_id' => $user->userId,
                    ]
               ]);


               $user->addStripeAccount($stripeID['id']);
          }

          return $customer;
     }
     function delete_customer($customer_id)
     {
          return stripeErrorHandling(function ($args) {
               $user = new user($args);
               $customer = $this->stripeClient->customers->delete($user->userId);
               return $customer;
          }, $customer_id);
     }

     public function get_customer($customer_id)
     {
          return stripeErrorHandling(function ($args) {
               $customer = $this->stripeClient->customers->retrieve($args);
               var_dump($customer);
               return $customer;
          }, $customer_id);
     }
}
class Product extends Stripe {

     public $product_id = null;
     public $product;
     function __construct($product_id = null) {
          $this->createConnection();
          if ($product_id) {
               $this->product = $this->getProduct($product_id);
               $this->product_id = $product_id;
          }
     }
     public function newProduct() {
        
return stripeErrorHandling(function () {
              return $this->stripeClient->products->create([
                    'name' => 'IOL SUBSCRIPTION PREMIUM',
                    'id' => "prod_IOL_SUBSCRIPTION_PREMIUM",
                  
               ]);    
          }, null);      
     }
     public function getProduct($product_id) {
          return stripeErrorHandling(function($product_id) {
               $prod = $this->stripeClient->products->retrieve($product_id,[]);
               if ($prod) {
                    return $prod->toArray();
               }
               return [];
          },$product_id);
     }
 
}
function getSubscriptionProduct () {
     $prod = new Product();
    return  $prod->getProduct('prod_IOL_SUBSCRIPTION_PREMIUM');
}
class Prices extends Stripe {
     private  $prices = [
          'price_IOLPremiumSubscription' => [
               
                    'unit_amount' => 2000,
                    'currency' => "usd",
                    'recurring' => [
                         'interval' => 'month',
                    ],
                    'product' => "prod_IOL_SUBSCRIPTION_PREMIUM"
               
          ]
     ];

     function __construct()
     {
          $this->createConnection();
     }
     function new_price($product_id) {
          return stripeErrorHandling(function ($product_id) {
               $prod = new Product();
               
          }, $product_id); 
     }
     function syncPrices () {
           stripeErrorHandling(function ($price) {
           

               
               $subscription = $this->stripeClient->prices->retrieve('price_IOLPremiumSubscription');
               var_dump($subscription);
               return 'a';
          },$this->prices['price_IOLPremiumSubscription']);

          $price = $this->stripeClient->prices->create($this->prices['price_IOLPremiumSubscription']);
          return $price;
     }
     function get_prices() {

          return $this->prices = $this->stripeClient->prices->all(['limit' => -1]);
     }
}