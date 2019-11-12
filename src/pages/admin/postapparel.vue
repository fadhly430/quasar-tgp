<template>


    <div class="flex flex-center">
      <div class="q-pa-md" style="max-width: 300px; width:100%">
        <h4 style="text-align:center;">Upload Items TGP_Projek</h4>
        <q-form class="q-gutter-md">
  
           <q-input
            filled
            v-model="kode_apparel"
            label="Kode Apparel"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="name_File"
            label="Nama Apparel"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

           <q-input
            filled
            v-model="jumlah_stock"
            label="Stock Apparel"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />


          <q-input
            filled
            v-model="ukuran"
            label="Ukuran Apparel"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="harga"
            label="Harga Apparel"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

       
           
          <div class="modal-body">
                <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
              <div>
                <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="dropbox">
                <p v-if="isInitial">
                  Drag your Image file(s) into the box to begin
                </p>
                <p v-if="isSaving">
                  Uploading {{ fileCount }} files...
                </p>
              </div>
            </form>
            <div class="dropbox" v-if="isFailed" @click="$emit('close')">
              <br>
              <p v-if="isFailed" style="color: #95D600">Upload Success
              </p>
            </div>
          </div>
            
          <div>
            
       
                  <div class="q-pa-md q-gutter-sm">
            <q-btn label="Submit" type="submit" color="black" @click="submit(waitedFormData)"/>

            <q-btn label="Reset" type="reset" color="black"  @click="reset"/>
            </div>
          </div>
        </div>
        <q-form id= "formlogin"  class="q-gutter-md " >
  
          <q-input filled v-model="KodeApparel" label="Kode Apparel"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-input filled v-model="NamaApparel" label="Nama Apparel"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-input filled v-model="KeteranganApparel" label="Keterangan"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-input filled v-model="StockApparel" label="Stock Apparel"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-input filled v-model="HargaApparel" label="Harga Apparel"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
           
          <div class="modal-body">
                <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
              <div>
                <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="dropbox">
                <p v-if="isInitial">
                  Drag your Image file(s) into the box to begin
                </p>
                <p v-if="isSaving">
                  Uploading {{ fileCount }} files...
                </p>
              </div>
            </form>
            <div class="dropbox" v-if="isFailed" @click="$emit('close')">
              <br>
              <p v-if="isFailed" style="color: #95D600">Upload Success
              </p>
            </div>
          </div>

          <div>
            <q-btn label="Submit" type="submit" color="black" @click="submit(waitedFormData)"/>
            <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" @click="reset"/>
          </div>
        </q-form>
      </div>
</template>

<script>
import {uploadTGP, upload}  from '../../api/upload/index';
import product from '../../api/barang/apparel';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
export default {
  name: "upload",
  
  data() {
    return {
      lorem: "",
      ipsum: "",
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      name : 'testing',
      string : 'string',
      ImgApparel : '',
      waitedFormData: '',
      waitedFormDataPdf: '',
      filesImage: '',
      filesPdf: '',
      KodeApparel : '',
      NamaApparel : '',
      KeteranganApparel : '',
      StockApparel : '',
      HargaApparel : ''
      
    };
  },
 computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      },
      getImage() {
        upload.getAllImage(window, this.id).then(function (images) {
          return images.config.url;
        }).catch(function (err) {
          console.log(err)
        });
      }
    },
    methods: {
      postProduct() {
          product.postproduct(window, this.KodeApparel, this.NamaApparel, this.KeteranganApparel, this.StockApparel, this.HargaApparel, this.KodeApparel+'.jpg' )
          .then(function(result) {
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });
      },
        reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
        this.KodeApparel = ''
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;
       
        uploadTGP(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });
      },
      filesChange(fieldName, fileList) {
        
        // handle file changes
        const formData = new FormData();
        if (!fileList.length) return;
        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            let namefile = this.KodeApparel + '.jpg'
            this.filesImage = namefile
            formData.append(fieldName, fileList[x], namefile);
          });
        // save it
        this.waitedFormData = formData
        
      },
      submit(waitedFormData) {
        
        this.save(waitedFormData);
        this.postProduct();
      }
    },
    mounted() {
      this.reset();
    },
};
</script>