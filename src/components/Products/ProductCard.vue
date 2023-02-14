<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-4" id="col-card">
    <div class="card h-100">
      <img class="card-img-top" :src="require('./../../assets/images/products/'+ product.id_product +'.jpg')" width="100" alt=""/>
      <div class="card-body">
        <h4 class="card-title text-primary">
          {{ product.tx_name }}
        </h4>
        <div class="row">
          <div class="col-lg-6 col-md-9 mb-6">
            <h8>$ {{ product.ft_price }}</h8>
          </div>
          <div class="col-lg-6 col-md-9 mb-6">
            <h8>{{ product.ft_discount }}% OFF</h8>
          </div>
        </div>
        <h5>Price: $ {{ product.real_price }}</h5>
        <!-- <p class="card-text">{{ product.tx_description }}</p> -->
        <h8>On Stock: {{ product.nu_stock }} remaining</h8>
      </div>
      <div class="card-footer">
      <!-- <s:if test="%{idUser!=null}">

        <s:form id="frmAddProduct"
        action="%{#pageContext.request.contextPath}/cart"
        method="post" theme="simple">
        
        <s:hidden id="IdSel" name="idSel" value="%{#product.id}"/>
        <s:submit class="btn btn-info" value="Add to Cart" />
        </s:form>
      </s:if> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    "product"
  ]
};
</script>

<style scoped>
  .col {
    padding: 0px;
  }
  #col-card {
    margin-bottom: 20px;
  }
</style>
