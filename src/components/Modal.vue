<template lang="html">
  <!-- Modal -->
  <div class="modal fade" id="bsModal" tabindex="-1" role="dialog" aria-labelledby="bsModalLabel" data-toggle="modal" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="bsModalLabel">{{title}}</h4>
        </div>
        <div class="modal-body">
          <slot name="modal-content"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" @click="cancel">{{cancelText}}</button>
          <button type="button" class="btn btn-primary" @click="confirm">{{confirmText}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const ModalTypes = ['modal-primary', 'modal-success', 'modal-info', 'modal-warning', 'modal-danger']
export default {
  mounted () {
    this.$bus.$on('modal-open', (args) => {
      // TODO: args가 올바른지 확인해야함
      this.type = args.type
      this.title = args.title
      this.confirmText = args.confirmText || '저장 후 닫기'
      this.cancelText = args.cancelText || '닫기'
      this.confirmBeforeHook = args.confirmBefore
      this.confirmAfterHook = args.confirmAfter
      this.cancelBeforeHook = args.cancelBefore
      this.cancelAfterHook = args.cancelAfter

      $('#bsModal').modal('show')
    })
    $('#bsModal').on('show.bs.modal', (e) => {
    })

    $('#bsModal').on('hidden.bs.modal', (e) => {
      this.confirmAfterHook()
      this.cancelAfterHook()
      this.resetProperties()
    })
  },
  data () {
    return {
      type: '',
      title: '',
      confirmText: '',
      cancelText: '',
      confirmBeforeHook: () => {},
      confirmAfterHook: () => {},
      cancelBeforeHook: () => {},
      cancelAfterHook: () => {}
    }
  },
  methods: {
    confirm: function () {
      this.confirmBeforeHook()
      $('#bsModal').modal('hide')
      this.cancelAfterHook = () => {}
    },
    cancel: function () {
      this.cancelBeforeHook()
      $('#bsModal').modal('hide')
      this.confirmAfterHook = () => {}
    },
    resetProperties: function () {
      this.type = ''
      this.title = ''
      this.description = ''
      this.confirmText = ''
      this.cancelText = ''
      this.confirmBeforeHook = () => {}
      this.confirmAfterHook = () => {}
      this.cancelBeforeHook = () => {}
      this.cancelAfterHook = () => {}
    }
  }
}
</script>

<style lang="css">
</style>
