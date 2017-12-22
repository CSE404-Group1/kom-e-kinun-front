import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../models/item.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Output } from '@angular/core';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {
  private reqObj:ItemModel;
  private today: string;
  private sub_cata_1:Array<string>;
  // error messages
  private nameError:String;
  private descriptionError:String;
  private actual_priceError:String;
  private sale_priceError:String;
  private offer_start_dateError:String;
  private offer_end_dateError:String;
  private quantityError:String;
  private offer_descriptionError:String;
  private brand_nameError:String;
  private product_origin_pageError:String;
  private catagoryError:String;
  private sub_catagory_1Error:String;
  private sub_catagory_2Error:String;
  private sub_catagory_3Error:String;
  private keywordsError:String;
  private is_featuredError:String;

  private files: FileList;
  private formData:FormData;




  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
    this.reqObj = {
      name: '',
      description: '',
      actual_price: '',
      sale_price: '',
      offer_start_date: '',
      offer_end_date: '',
      quantity: 0,
      offer_description: '',
      brand_name: '',
      product_origin_page: '',
      catagory: '',
      sub_catagory_1: '',
      sub_catagory_2: 'default',
      sub_catagory_3: '',
      keywords: '',
      is_featured: false,
    }
    this.formData = new FormData();
  }

  onChange(files: FileList) {
    this.files = files;
  }


  // ON FORM SUBMIT
  onSubmit(f){
    this.reqObj.name = f.form.value.name;
    this.reqObj.description = f.form.value.description;
    this.reqObj.actual_price = f.form.value.actual_price;
    this.reqObj.sale_price = f.form.value.sale_price;
    this.reqObj.offer_start_date = f.form.value.offer_start_date+' 00:00:00';
    this.reqObj.offer_end_date = f.form.value.offer_end_date+' 00:00:00';
    this.reqObj.offer_description = f.form.value.offer_description;
    this.reqObj.brand_name = f.form.value.brand_name;
    this.reqObj.product_origin_page = f.form.value.product_origin_page;
    this.reqObj.keywords = f.form.value.keywords;


    this.api.addItem(this.reqObj).subscribe((res)=>{
      if(res){
        this.formData.append('image',this.files[0], this.reqObj.name+res.toString());
        this.api.addItemImage(this.formData,res).subscribe((res)=>{
          console.log(res)
        },(err)=>{
          console.log(err)
        })
        //window.location.reload();
      }
    },(err)=>{
      this.nameError = err.error.name;
      this.descriptionError = err.error.description;
      this.actual_priceError = err.error.actual_price;
      this.sale_priceError = err.error.sale_price;
      this.offer_start_dateError = err.error.offer_start_date;
      this.offer_end_dateError = err.error.offer_end_date;
      this.quantityError = err.error.quantity;
      this.offer_descriptionError = err.error.offer_description;
      this.brand_nameError = err.error.brand_name;
      this.product_origin_pageError = err.error.product_origin_page;
      this.catagoryError = err.error.catagory;
      this.sub_catagory_1Error = err.error.sub_catagory_1;
      this.sub_catagory_2Error = err.error.sub_catagory_2;
      this.sub_catagory_3Error = err.error.sub_catagory_3;
      this.keywordsError = err.error.keywords;
      this.is_featuredError = err.error.is_featuredError;
      console.log(err)
    })
  }

  categorySelect(val){

    this.reqObj.catagory = val;

    if (val == "men's fashion") {
      this.sub_cata_1 = [
        "western clothing", "foot wear", "innerwear & nightwear", "traditional clothing", "winter clothing", "men's accessories", "mens watches", "other"
      ]
    }
    if (val == "women's fashion") {
      this.sub_cata_1 = [
        "western Clothing", "women's shoes", "lingerie & nightwear", "traditional clothing", "winter clothing", "women's accessories", "womens watches", "women's jewellery" ,"other"
      ]
    }
    if (val == "phones & tablets") {
      this.sub_cata_1 = [
        "smartphones", "mobile & tablet accessories", "tablets", "landline", "other"
      ]
    }
    if (val == "tvs, audios & cameras") {
      this.sub_cata_1 = [
        "televisions", "video", "tv & video accessories", "camera", "camera accessories", "audio & video", "top brands", "other"
      ]
    }
    if (val == "computing & gaming") {
      this.sub_cata_1 = [
        "laptops", "printers & scanners", "storage","desktops & monitors", "computer accessories","top brands", "gaming", "other"
      ]
    }
    if (val == "appliances") {
      this.sub_cata_1 = [
        "cooling & heating", "washer & dryers", "refrigerators & freezers","cooking appliances", "mixing & blending","beverage preperations", "other"
      ]
    }
    if (val == "home & living") {
      this.sub_cata_1 = [
        "bedding", "furniture", "lighting","kitchen & dining", "home fixures & repairs","bathroom accessories", "outdoor & garden", "home decor", "other"
      ]
    }
    if (val == "sports & travels") {
      this.sub_cata_1 = [
        "exercise & fitness", "strength & training", "racket sports","team sports", "outdoor activities","shoes & clothing", "fitness accessories", "luggage", "other"
      ]
    }
    if (val == "beauty & health") {
      this.sub_cata_1 = [
        "makeup", "personal care", "men's grooming","skin care", "hair care","beauty tools", "health & wellness", "fragrances", "other"
      ]
    }
    if (val == "baby, kids & toys") {
      this.sub_cata_1 = [
        "boys fashion", "girls fashion", "babies fashion","toys & games", "baby & toddler","school essentials", "other"
      ]
    }
    if (val == "grocers shop") {
      this.sub_cata_1 = [
        "cooking essentials", "tea, coffee & beverages", "breakfast","canned & packeged foods", "snacks","chocolates & desserts", "laundry & home care", "pet supplies", "other"
      ]
    }
    if (val == "others") {
      this.sub_cata_1 = [
        "books & stationery", "automobile & motorcycles", "stationery","travel & tours", "lifestyle accessories","wholesale", "other"
      ]
    }
    this.reqObj.sub_catagory_1 = this.sub_cata_1[0];
  }
  subCategory1Select(val){
    this.reqObj.sub_catagory_1 = val;
  }


  checkIfFilled(e){

  }

}
