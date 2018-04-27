<template>
  <div>my music</div>
</template>

<script>
import { phoneLogin } from 'services/login';
import { getUserPlayList } from 'services/user_service ';

export default {
  name: 'my-music',
  mounted() {
    const phone = '15817109872';
    const password = '650038';
    phoneLogin(phone, password).then(result => {
      window.user = result.data;
      return result.data;
    }).then(data => {
      const uid = window.user.account.id;
      getUserPlayList()
    })
  }
};
</script>

