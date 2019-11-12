<template>
    <div  class="q-pa-md">
        <div class="column" style="height: 50px"/>
        <div class="row items-center">
            <div class="col-5">
              <q-separator color="blue-grey-3" inset />
            </div>
          <div class="col-2">
          <div class="text-h5 text-center text-weight-regular">Shoes</div>
          </div>
          <div class="col-5">
            <q-separator color="blue-grey-3" inset />
          </div>
        </div>
        <q-form id= "formlogin"  class="q-gutter-md " >
  
          <q-input filled v-model="KodeShoes" label="Kode Shoes"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-input filled v-model="NamaShoes" label="Nama Shoes"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-input filled v-model="KeteranganShoes" label="Keterangan"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-input filled v-model="StockShoes" label="Stock Shoes"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <q-input filled v-model="HargaShoes" label="Harga Shoes"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
           
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
import product from '../../api/barang/shoes';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
export default {
  name: "upload",
  
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      name : 'testing',
      string : 'string',
      ImgShoes : '',
      waitedFormData: '',
      waitedFormDataPdf: '',
      filesImage: '',
      filesPdf: '',
      KodeShoes : '',
      NamaShoes : '',
      KeteranganShoes : '',
      StockShoes : '',
      HargaShoes : ''
      
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
        upload.getlImage(window, this.id).then(function (images) {
          return images.config.url;
        }).catch(function (err) {
          console.log(err)
        });
      }
    },
    methods: {
      postProduct() {
          product.postproduct(window, this.KodeShoes, this.NamaShoes, this.KeteranganShoes, this.StockShoes, this.HargaShoes, this.KodeShoes+'.jpg' )
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
        this.KodeShoes = ''
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
            let namefile = this.KodeShoes + '.jpg'
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