import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ProductsService {
  products: any
  uri = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // addProduct(name, email) {
  //   const obj = {
  //     name,
  //     email
  
  //   };
  //   // console.log(obj);
  //   this.products = this.http.post('https://jsonplaceholder.typicode.com/users', obj)
  //       .subscribe(res => console.log(res));
  //    return this.products;
  // }

  addProduct(name, email) {
    const obj = {
      name:name,
      email:email
  
    };
     this.http.post('http://httpbin.org/post', obj).toPromise().then((data:any)=>{
      // console.log(data.json);
      const usersJson: any[] = Array.of(data.json);
      this.products = usersJson
    });
  }


  getProducts(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.products = data as string [];	 // FILL THE ARRAY WITH DATA.
      }
    );
    // console.log(this.products);
    return this.products;
    // return [
    //   {
    //     "id": 1,
    //     "name": "Leanne Graham",
    //     "email": "Sincere@april.biz"
    //   },
    //   {
    //     "id": 2,
    //     "name": "Nisha Jadhav",
    //     "email": "njadhav@katalysttech.com"
    //   }
    // ];
  }
}