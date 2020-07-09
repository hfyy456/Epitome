<<template>
<div class="container">
    <div class="upload"><a-button type="primary" size="large" @click="handleUpload">Upload</a-button></div>
  <div class="clearfix">
    <a-upload
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
      multiple
    >
        <div v-if="fileList.length < 10">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          Select photos
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
  </div>
</template>
<script>
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}
export default {
    data() {
        return {
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
    },
    mounted() {},
    methods: {
        getUploadToken() {
            return new Promise((resolve, reject) => {
                this.$axios
                    .post('image/uploadToken', {})
                    .then(res => {
                        resolve(res.data)
                    })
                    .catch(e => {
                        reject(e)
                    })
            })
        },
        handleCancel() {
            this.previewVisible = false
        },
        async handlePreview(file) {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj)
            }
            this.previewImage = file.url || file.preview
            this.previewVisible = true
        },
        handleChange({ fileList }) {
            const orignLen = this.fileList.length
            const len = fileList.length
            if (len > length) {
                this.fileList = fileList
                this.fileList[len - 1].status = 'error'
            } else {
                this.fileList = fileList
            }
        },
        handleUpload() {
            const url = 'http://upload.qiniup.com'
            const pre = 'http://qiniu.hfsblog.com/'
            this.getUploadToken().then(res => {
                let promises = []
                const len = this.fileList.length
                for (var i = 0; i < len; i++) {
                    let obj = this.fileList[i]
                    if (obj.status == 'error') {
                        obj.status = 'uploading'
                        const formData = new FormData()
                        const key = new Date().getTime() + i + '.jpeg'
                        formData.append('token', res)
                        formData.append('file', this.fileList[i].originFileObj)
                        formData.append('key', key)
                        this.$set(this.fileList, i, obj)
                        promises.push(this.upload(url, formData, i))
                    }
                }
                Promise.all(promises).then(values => {
                    //message.success('Patch upload successfully!')
                    console.log(values)
                    let params = {
                        list: values,
                    }
                    if (params.list) {
                        this.$axios.post('image/create', params).then(res => {
                            console.log(res)
                        })
                    }
                })
            })
        },
        upload(url, formData, index) {
            return new Promise((resolve, reject) => {
                this.$axios
                    .post(url, formData)
                    .then(res => {
                        const pre = 'http://qiniu.hfsblog.com/'
                        let obj = this.fileList[index]
                        obj.status = 'done'
                        this.$set(this.fileList, index, obj)
                        console.log(this.fileList)
                        resolve(pre + res.data.key)
                    })
                    .catch(e => {
                        let obj = this.fileList[index]
                        obj.status = 'error'
                        reject(e)
                    })
            })
        },
    },
}
</script>
<style lang="less" scoped>
.container {
    min-height: calc(100vh - 104px);
    .upload {
        text-align: right;
        padding-top: 10px;
        padding-right: 5px;
    }
    .clearfix {
        padding: 20px;
        margin: auto;
        .upload-wrapper {
            margin: auto;
        }
    }
}
/deep/.ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
}
/deep/.ant-upload-picture-card-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
/deep/.ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
}
/deep/.ant-upload-list {
    display: contents;
}
/deep/.ant-upload-list-picture-card-container {
    margin: 8px;
    height: 300px;
    width: 300px;
}
/deep/.ant-upload-list-picture-card .ant-upload-list-item {
    height: 300px;
    width: 300px;
}
/deep/.ant-upload.ant-upload-select-picture-card {
    width: 300px;
    height: 300px;
    margin: 8px;
}
</style>