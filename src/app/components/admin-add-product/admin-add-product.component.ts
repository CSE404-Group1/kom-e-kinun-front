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
  private sub_cata_2:Array<string>;
  private valid:boolean;
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
  private imageError:String;
  // file
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
    };
    this.valid = true;
    this.formData = new FormData();
  }

  onChange(files: FileList) {
    this.files = files;
    if(files == undefined){
      this.valid = false;
      this.imageError = 'please insert an Image';
    }else{
      let fileName = files[0].name;
      let fileExt = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
      // checking the file extention
      if(fileExt == "png" || fileExt == "bmp" || fileExt == "jpeg" || fileExt == "jpg"){
        // checking the file size
        if(files[0].size < 2000000){
          this.valid = true;
          this.imageError = '';
        }else{
          this.valid = false;
          this.imageError = 'The image size must less than 2MB';
        }
      }else{
        this.valid = false;
        this.imageError = 'The image must be a jpg, png, jpeg or bmp';
      }


    }

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


    if(this.valid){
      this.api.addItem(this.reqObj).subscribe((res)=>{
        if(res){
          if(this.files[0] != undefined || this.files[0] != null){
            this.formData.append('image',this.files[0], this.reqObj.name+res.toString());
            this.api.addItemImage(this.formData,res).subscribe((res)=>{
              console.log(res)
            },(err)=>{
              console.log(err)
            })
          }
          window.location.reload();
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
    }else if(this.files == undefined){
      this.imageError = 'please insert an Image';
    }
  }

  categorySelect(val){

    this.reqObj.catagory = val;

    if (val == "mens fashion") {
      this.sub_cata_1 = [
        "western clothing (male)", "men's shoes", "innerwear & nightwear", "traditional clothing (male)", "winter clothing (male)", "men's accessories", "men's watches"
      ]
    }
    if (val == "womens fashion") {
      this.sub_cata_1 = [
        "western clothing (female)", "women's shoes", "lingerie & nightwear", "traditional clothing (female)", "winter clothing (female)", "women's accessories", "women's watches", "women's jewellery"
      ]
    }
    if (val == "phones & tablets") {
      this.sub_cata_1 = [
        "smartphones", "mobile & tablet accessories", "tablets", "landline"
      ]
    }
    if (val == "tvs, audios & cameras") {
      this.sub_cata_1 = [
        "televisions", "video", "tv & video accessories", "camera", "camera accessories", "audio & video", "top brands"
      ]
    }
    if (val == "computing & gaming") {
      this.sub_cata_1 = [
        "laptops", "printers & scanners", "storage","desktops & monitors", "computer accessories","top brands", "gaming"
      ]
    }
    if (val == "appliances") {
      this.sub_cata_1 = [
        "cooling & heating", "washer & dryers", "refrigerators & freezers", "vacuum cleaners", "cooking appliances", "mixing & blending", "beverage preperations"
      ]
    }
    if (val == "home & living") {
      this.sub_cata_1 = [
        "bedding", "furniture", "lighting", "kitchen & dining", "home fixures & repairs","bathroom accessories", "home storage supplies", "outdoor & garden", "home decor"
      ]
    }
    if (val == "sports & travels") {
      this.sub_cata_1 = [
        "exercise & fitness", "strength & training", "racket sports","team sports", "outdoor activities","shoes & clothing", "fitness accessories", "luggage"
      ]
    }
    if (val == "beauty & health") {
      this.sub_cata_1 = [
        "makeup", "personal care", "men's grooming","skin care", "hair care","beauty tools", "health & wellness", "fragrances"
      ]
    }
    if (val == "baby, kids & toys") {
      this.sub_cata_1 = [
        "boys fashion", "girls fashion", "babies fashion","toys & games", "baby & toddler","school essentials"
      ]
    }
    if (val == "grocers shop") {
      this.sub_cata_1 = [
        "cooking essentials", "tea, coffee & beverages", "breakfast","canned & packeged foods", "snacks","chocolates & desserts", "laundry & home care", "pet supplies"
      ]
    }
    if (val == "others") {
      this.sub_cata_1 = [
        "books & stationery", "automobile & motorcycles", "stationery","travel & tours", "lifestyle accessories","wholesale"
      ]
    }
    this.reqObj.sub_catagory_1 = this.sub_cata_1[0];
  }
  subCategory1Select(val){
    this.reqObj.sub_catagory_1 = val;
    console.log('subcate1 selected')

    if (val == "western clothing (male)") {
      this.sub_cata_2 = [
        "tshirts", "polos", "shirts", "coats & jackets", "pants", "jeans", "shorts & barmudas"
      ]
    }
    if(val == "men's shoes"){
      this.sub_cata_2 = [
        "sandals & slippers","formal shoes","casual shoes","boots","sneakers & sport shoes","shoe care & accessories"
      ]
    }
    if(val == "innerwear & nightwear"){
      this.sub_cata_2 = [
        "underwear","undershirts","socks","nightwear"
      ]
    }
    if(val == "men's accessories"){
      this.sub_cata_2 = [
        "ties & cuffings","wallets & card holders","eyewear","belts","bags","caps & hats","jewellery","other accessories"
      ]
    }
    if(val == "men's watches"){
      this.sub_cata_2 = [
        "analog","chronograp","smart","digital"
      ]
    }
    if(val == "winter clothing (male)"){
      this.sub_cata_2 = [
        "sweaters & cardigans","hoodies & sweatshirts","coats & jackets","gloves & scarves"
      ]
    }
    if(val == "traditional clothing (male)"){
      this.sub_cata_2 = [
        "panjabis & sherwanis","fatuas & kurtes","waistcoats","unstitched fabric"
      ]
    }
    if(val == "western clothing (female)"){
      this.sub_cata_2 = [
        "tops","t-shirts","pants","shrugs","shirts"
      ]
    }
    if(val == "women's shoes"){
      this.sub_cata_2 = [
        "flats & sandals","heels","wedges","ballerinas"
      ]
    }
    if(val == "lingerie & nightwear"){
      this.sub_cata_2 = [
        "bras","panties","nightwear","shapewear"
      ]
    }
    if(val == "traditional clothing (female)"){
      this.sub_cata_2 = [
        "saree","anarkali & gowns","pakistani lawn","salwar kameez","boutiqe dress","unstiched fabrics","lehengas","hijabs & burkas"
      ]
    }
    if(val == "women's jewellery"){
      this.sub_cata_2 = [
        "earrings","necklaess","nosepin","rings","anklet","jewellery sets","bangles & bracelets"
      ]
    }
    if(val == "women's accessories"){
      this.sub_cata_2 = [
        "sunglasses & eyewear","bags & clutches","hats caps & gloves"
      ]
    }
    if(val == "women's watches"){
      this.sub_cata_2 = [

      ]
    }
    if(val == "winter clothing (female)"){
      this.sub_cata_2 = [

      ]
    }
    if(val == "smartphones"){
      this.sub_cata_2 = [
        "samsung","huwawei","symphony","lg","asus","infinix","xiaomi","we","apple","lava","dcl","general mobile","helio","oppo","micromax"
      ]
    }
    if(val == "mobile & tablet accessories"){
      this.sub_cata_2 = [
        "powerbanks","cases, covers & protections","memory cards","earphones & headsets","phone chargers","selfie-sticks","bluetooth accessories","vr headsets","cables & adaptors","other accessories","chargers","smart watches","batteries","tablet accessories","sim cards"
      ]
    }
    if(val == "tablets"){
      this.sub_cata_2 = [
        "3g","wifi","below 8","below 9"
      ]
    }
    if(val == "landline"){
      this.sub_cata_2 = [
        "cordless","corded"
      ]
    }
    if(val == "televisions"){
      this.sub_cata_2 = [
        "led tv","smart tv","3d tv","4k tv"
      ]
    }
    if(val == "video"){
      this.sub_cata_2 = [
        "dvd players","projectors"
      ]
    }
    if(val == "tv & video accessories"){
      this.sub_cata_2 = [
        "smart box","romote controllers","wall mount","audio cables","accessories","binoculars & optics"
      ]
    }
    if(val == "camera"){
      this.sub_cata_2 = [
        "instant camera","security & surveilance","dslr & hybrid cameras","compact cameras","semi pro cameras","camcorders","sports cameras"
      ]
    }
    if(val == "camera accessories"){
      this.sub_cata_2 = [
        "camera lenses","camera tripods","camera memory cards","camera filters","camera flashes","other accessories"
      ]
    }
    if(val == "audio & video"){
      this.sub_cata_2 = [
        "mp3 players","home theatres","hi-fi Stereo","sound bars","car audio & gps","musical instruments","speaker system","movies & songs"
      ]
    }
    if(val == "top brands"){
      this.sub_cata_2 = [
        "sony","samsung","lg","Fujifilm","walton","philips"
      ]
    }
    if(val == "laptops"){
      this.sub_cata_2 = [
        "macbooks","notebooks"
      ]
    }
    if(val == "printers & scanners"){
      this.sub_cata_2 = [
        "cartiges ink & toners","laser printers","office printers"
      ]
    }
    if(val == "storage"){
      this.sub_cata_2 = [
        "usb flash drives","memory cards","extarnak hdd"
      ]
    }
    if(val == "desktops & monitors"){
      this.sub_cata_2 = [
        "all in ones","desktop bundles","monitors"
      ]
    }
    if(val == "computer accessories"){
      this.sub_cata_2 = [
        "laptop accessories","headphones","speaker","keyboards","networking","peripherals","mouses"
      ]
    }
    if(val == "top brands"){
      this.sub_cata_2 = [
        "asus","acer","hp","lenovo","apple"
      ]
    }
    if(val == "cooling & heating"){
      this.sub_cata_2 = [
        "air conditioner","hot water system","heaters"
      ]
    }
    if(val == "washer & dryers"){
      this.sub_cata_2 = [
        "washing machines","dryers"
      ]
    }
    if(val == "refrigerators & freezers"){
      this.sub_cata_2 = [
        "refrigerators","freezers","compressors"
      ]
    }
    if(val == "vacuum cleaners"){
      this.sub_cata_2 = [

      ]
    }
    if(val == "cooking appliances"){
      this.sub_cata_2 = [
        "cooktops","exhaust & rangehoods"
      ]
    }
    if(val == "mixing & blending"){
      this.sub_cata_2 = [
        "grinder","blendors","mixer","hanheld blendors","food processors"
      ]
    }
    if(val == "beverage preperations"){
      this.sub_cata_2 = [
        "kettles","coffee machines","juicers"
      ]
    }
    if(val == "bedding"){
      this.sub_cata_2 = [
        "bedsheets","blankets & duvets","pillow covers","mattresses"
      ]
    }
    if(val == "furniture"){
      this.sub_cata_2 = [
        "bean bags","office furnitures","bedroom furnitures","living room furnitures","kitchen & dining furnitures"
      ]
    }
    if(val == "lighting"){
      this.sub_cata_2 = [
        "decorative lamps","ceiling lights","lighting bulbs"
      ]
    }
    if(val == "kitchen & dining"){
      this.sub_cata_2 = [
        "kitchen tools","bakeware","table ware","kitchen storages","grilling & bbq utensils","cook ware","cooking knives"
      ]
    }
    if(val == "home fixures & repairs"){
      this.sub_cata_2 = [
        "electric fixures","hand tools & repairs"
      ]
    }
    if(val == "bathroom accessories"){
      this.sub_cata_2 = [

      ]
    }
    if(val == "outdoor & garden"){
      this.sub_cata_2 = [

      ]
    }
    if(val == "home storage supplies"){
      this.sub_cata_2 = [

      ]
    }
    if(val == "home decor"){
      this.sub_cata_2 = [
        "showpieces","vases","cusion inserts & covers","curtains, blinds & shades","clocks","other home decor","wall arts","candle & candle holders"
      ]
    }

    /******Final parenthesis******/
  }

  checkIfFilled(e){

  }

}
