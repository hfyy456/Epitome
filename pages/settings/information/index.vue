<template>
  <div class="information-container">
    <section class="wrapper">
      <a-card title="My Profile" :bordered="false" style="width: 100%">
        <a-form-model
          ref="ruleForm"
          :model="user"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item ref="name" label="Username" prop="name">
            <a-input
              v-model="user.username"
              @blur="
                () => {
                  $refs.name.onFieldBlur()
                }
              "
            />
          </a-form-model-item>
          <a-form-model-item label="Birthday" required prop="date1">
            <a-date-picker
              v-model="user.birthday"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </a-form-model-item>
          <a-form-model-item label="Gender" prop="gender">
            <a-radio-group v-model="user.gender">
              <a-radio value="1"> Male </a-radio>
              <a-radio value="2"> Female </a-radio>
              <a-radio value="0"> Not specified </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="Location" prop="location">
            <a-cascader v-model="location" :options="residences" />
          </a-form-model-item>
          <a-form-model-item label="Description" prop="desc">
            <a-input v-model="user.desc" type="textarea" />
          </a-form-model-item>

          <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary"> Create </a-button>
            <a-button style="margin-left: 10px"> Reset </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-card>
    </section>
  </div>
</template>
<script>
const residences = [
  {
    value: 'Zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'Hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'Jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'Nanjing',
        label: 'Nanjing',
      },
    ],
  },
]
export default {
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      residences,
      other: '',
      location: [],
      rules: {
        name: [
          {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
          },
        ],
      },
      user: {},
    }
  },
  mounted() {
    this.getInfor()
  },
  methods: {
    getInfor() {
      this.$store.dispatch('user/getInfo').then((res) => {
        this.user = res.data
        this.location = this.user.location.split(',').reverse()
        console.log(this.location)
        console.log(this.user)
      })
    },
  },
}
</script>
<style lang="less" scoped>
.information-container {
  padding: 10px;
  display: flex;
  justify-content: center;
  .wrapper {
  }
}
</style>
