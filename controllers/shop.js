const Product = require('../models/product');
const Cart = require('../models/cart');
const { where } = require('sequelize');

exports.getProducts = (req, res, next) => {
  Product.findAll().then((r)=>{
    res.render('shop/product-list', {
      prods: r,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err=>{
    console.log(err)
  }) 
    
  };

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({where:{id:prodId}}).then((r)=>{
    res.render('shop/product-list', {
      prods: r,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err=>{
    console.log(err)
  }) 
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(r=>{
    res.render('shop/product-list', {
      prods: r,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err=>{
    console.log(err)
  }) 
};

exports.getCart = (req, res, next) => {
  Cart.findAll().then(r=>{
    res.render('shop/cart', {
      path: '/cart',
      pageTitle: 'Your Cart',
      products: r
    });
  }).catch(err=>{
    console.log(err);
  })
  // Cart.getCart(cart => {
  //   Product.fetchAll(products => {
  //     const cartProducts = [];
  //     for (product of products) {
  //       const cartProductData = cart.products.find(
  //         prod => prod.id === product.id
  //       );
  //       if (cartProductData) {
  //         cartProducts.push({ productData: product, qty: cartProductData.qty });
  //       }
  //     }
      
  //   });
  // });
};



exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  const title = req.body.title;
  const price = req.body.price;
  Cart.findByPk(productId)
    .then(product => {
      if (!product) {
        Cart.create({
          id: productId,
          title: title,
          qty: 1,
          totalprice: price
        });
      res.redirect('/cart');

      }
      else{

        Cart.findOne({ where: {id: productId } }).then(cartItem=>{
          // If the product already exists in the cart, increment the quantity and update the total price
          Cart.update({
          qty:cartItem.qty +1,
          totalprice:cartItem.totalprice +parseInt(req.body.price)
          },

          { where:{id:productId} }
          )

          res.redirect('/cart');

        }).catch(err=>{

            console.log(err)
          });
          
        
      }
    }

    ).catch(err => {
      console.log(err)
    })
    }


exports.postCartDeleteProduct = (req, res, next) => {
  const productId = req.body.productId;
  const title = req.body.title;
  const price = req.body.price;
  Cart.findByPk(productId).then(product=>{
    if(!product){
      res.redirect('/cart')
    }
    else{
      Cart.findOne({where:{id:productId}}).then(item=>{
        if(item.qty>1){
          Cart.update({
            qty: item.qty-1,
            totalprice: item.totalprice-parseInt(price)
          },{
            where:{id:productId}
          })
          res.redirect('/cart')

        } else{
          Cart.destroy({where:{id:productId}})
           res.redirect('/cart')

        }
      }).catch(err=>{
        console.log(err)
      })
    }
  }) 
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
