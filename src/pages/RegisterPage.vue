<template>
  <q-card class="q-ma-xl">
    <div class="row">
      <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
        <div class="row full-width q-px-xl q-pb-xl full-height flex flex-center">
          <div class="">
            <div class="text-h4 text-uppercase text-white fredoka" style="min-width: 220px">Bem vindo!</div>
            <div class="text-white q-my-sm text-subtitle1">Entre com seus dados para registrar-se</div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-7">
        <div class="row q-ml-sm q-mt-sm sm-and-up-hide">
          <div class="col-12 fredoka text-subtitle1">
            <router-link class="text-primary" style="text-decoration: none" to="/">Registro</router-link>
          </div>
        </div>
        <div class="row q-pa-sm-sm q-pa-md">
          <div class="col-12">
            <q-card-section>
              <div class="q-mb-xl">
                <div class="flex justify-center">
                  <div class="text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka">Formulário de Registro</div>
                </div>
              </div>

              <q-form ref="form" class="q-gutter-md" @submit.prevent="submit">
                <q-input v-model="user.first_name" label="First Name" name="First Name" />
                <q-input v-model="user.last_name" label="Last Name" name="Last Name" />
                <q-input v-model="user.email" label="Email" name="Email" type="email" />
                <q-input v-model="user.password" label="Password" name="password" type="password" />

                <div>
                  <q-btn class="full-width fredoka" color="primary" label="Registra-se" rounded type="submit"></q-btn>

                  <div class="q-mt-lg">
                    <div class="q-mt-sm">
                      Já possui conta?
                      <router-link class="text-primary" to="/login">Login</router-link>
                    </div>
                  </div>
                </div>
              </q-form>

              <q-toast v-if="error" :message="error" color="negative" />
            </q-card-section>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>


<script setup>
import { ref, reactive } from 'vue';
import register from 'src/firebase/firebase-register'; // Certifique-se de que esta importação é correta
import { useRouter } from 'vue-router';

const user = reactive({
  last_name: null,
  first_name: null,
  email: null,
  password: null
});

const form = ref(null);

const router = useRouter();

const submit = async () => {
  if (form.value.validate() && !!await register(user)) {
    router.push('/app');
  }
};
</script>
