<template>
  <div>
    <div class="screen-overlay" />
    <div id="searchbox" class="searchbox">
      <span id="btn_searchbox_close" class="btn btn-sm btn-close-searchbox" title="Close Overlay"><i class="fa fa-times" /></span>
      <div class="searchbox-content">
        <form action="page-search.html" class="form-search-page">
          <div>
            <input id="searchinput_header" type="text" autocomplete="off" class="form-control" name="" placeholder="Поиск клиник">
            <button type="submit" class="btn-search-page"> <i class="fa fa-search" /></button>
          </div>

          <ul class="list-searchbox">
            <li>Magnitno rezonans - MRT</li>
            <li>Magniy va kalsiy</li>
            <li>Magamed Toshmatov</li>
            <li>Qandaydur magnitogorsk shahri</li>
            <li>Ajoyib bir magazin</li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted() {
    console.log('Component mounted.')
    $('#btn_search_header').click(function() {
      $('#searchbox').show()
    })

    $('#btn_searchbox_close').click(function(e) {
      e.stopPropagation()
      $('#searchbox').hide()
    })

    $('.list-searchbox li').click(function() {
      const searchterm = $(this).text()
      $('#searchinput_header').val(searchterm)
      $('.list-searchbox').hide()
    })
    $(document).on('keyup', function(evt) {
      if (evt.keyCode === 27) {
        $('#searchbox').hide()
      }
    })
  }
}
</script>
