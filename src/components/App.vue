<template>
    <v-app dark>
        <main>
            <v-container fluid>
                <v-layout row>
                    <v-flex xs12 md10 offset-md1>
                        <v-slide-x-transition mode="out-in">
                            <router-view></router-view>
                        </v-slide-x-transition>
                    </v-flex>
                </v-layout>
            </v-container>
        </main>
    </v-app>
</template>

<style>
    .menu__content {
        background: #303030;
    }
</style>

<script>
    export default {
        data: function() {
            return {
                user: []
            };
        },
    }
</script>
