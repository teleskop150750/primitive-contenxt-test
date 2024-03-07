<script setup lang="ts">
import Dialog from './components/Dialog/Dialog.vue'
import DialogTrigger from './components/DialogTrigger/DialogTrigger.vue'
import DialogContent from './components/DialogContent/DialogContent.vue'

import Alert from './components/Alert/Alert.vue'
import AlertTrigger from './components/AlertTrigger/AlertTrigger.vue'
import AlertContent from './components/AlertContent/AlertContent.vue'


import BaseDialog from './components/Base/Dialog/Dialog.vue'
import BaseDialogTrigger from './components/Base/DialogTrigger/DialogTrigger.vue'
import BaseDialogContent from './components/Base/DialogContent/DialogContent.vue'

import BaseAlert from './components/Base/Alert/Alert.vue'
import BaseAlertTrigger from './components/Base/AlertTrigger/AlertTrigger.vue'
import BaseAlertContent from './components/Base/AlertContent/AlertContent.vue'
</script>

<template>
  <div>

    <BaseAlert>
      <BaseDialog>

        <BaseDialogTrigger>
          Base_DialogTrigger
        </BaseDialogTrigger>

        <BaseDialogContent>

          <BaseAlertTrigger>
            Base_AlertTrigger
          </BaseAlertTrigger>

          <p>Base_Dialog Content</p>
        </BaseDialogContent>

      </BaseDialog>

      <BaseAlertContent>
        <p>Base_Alert Content</p>
      </BaseAlertContent>

    </BaseAlert>

    <hr />


    <Alert>
      <Dialog>

        <DialogTrigger>
          DialogTrigger
        </DialogTrigger>

        <DialogContent>

          <AlertTrigger>
            AlertTrigger
          </AlertTrigger>

          <p>Dialog Content</p>
        </DialogContent>

      </Dialog>

      <AlertContent>
        <p>Alert Content</p>
      </AlertContent>

    </Alert>
  </div>
</template>
