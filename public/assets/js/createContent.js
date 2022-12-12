// Create campain

const urlCampain = 'https://testing-kuponner-production.up.railway.app/api/campain';

fetch(urlCampain)
    .then(res => res.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {

            let div = document.createElement('div');

            if (i === 0) {
                div.className = 'carousel-item active';
                
            } else {
                div.className = 'carousel-item';
            }
            
            div.setAttribute('data-bs-interval', '10000');
            // Convert url to string
            let text = data[i].kp_CampainName;
            let url = text.replace(/ /g, "-");
            div.innerHTML = `

            <!-- Slide 1 -->
            
                <section class="position-relative">
                    <div class="container">
                        <!-- Content and Image START -->
                        <div class="row g-4 g-lg-5 align-items-center">
                            <!-- Image -->
                            <div class="col-lg-6 position-relative">
                            <a href="/detail/${url}" class="stretched-link">
                                <img src="${data[i].kp_CampainImage}" id="campainImage" class="rounded img-fluid" alt="${url}"></a>     
                            </div>

                            <div class="col-lg-6 position-relative">
                                <!-- Title -->
                                <h2 class="mb-2">${data[i].kp_CampainName}</h2>
                                <hr>

                                <!-- Countdown START -->
                                <div class="container">
                                    <div class="d-flex rounded-3 mt-2">
                                        <h3><i class="bi bi-stopwatch-fill"></i></h3>
                                        <div class="ms-3">
                                            <h5 id="stateofert" class="text-uppercase">Tiempo de oferta</h5>
                                        </div>
                                    </div>

                                    <div class="row justify-content-between">
                                        <ul class="row row-cols-4 mx-0" style="list-style-type: none;"
                                            data-countdown="${data[i].kp_CampainTime}">
                                            <li class="col text-center" id="days" data-days="00">--</li>
                                            <li class="col text-center" id="hours" data-hours="00">--</li>
                                            <li class="col text-center" id="minutes" data-minuts="00">--</li>
                                            <li class="col text-center" id="seconds" data-seconds="00">--</li>

                                            <span style="font-size: 0.8rem;" class="col text-center">DÍAS</span>
                                            <span style="font-size: 0.8rem;"
                                                class="col text-center">HORAS</span>
                                            <span style="font-size: 0.8rem;" class="col text-center">MINS</span>
                                            <span style="font-size: 0.8rem;" class="col text-center">SEGS</span>
                                        </ul>
                                    </div>

                                </div>
                                <!-- Countdown END -->

                                <!-- Description START -->
                                <div class="container">
                                    <div class="row justify-content-between">
                                        <div class="d-flex rounded-3 mt-2 mb-1">
                                            <h3><i class="bi bi-bag-check-fill"></i></h3>
                                            <div class="ms-3 mb-3">
                                                <h5 class="text-uppercase" id="stateofert">${data[i].kp_CampainBuy} Compradas</h5>
                                            </div>
                                        </div>
                                        <div class="col text-start">
                                            <h5 class="text-secondary">Valor</h5>
                                            <h6 class="h4 mb-2 days">${data[i].kp_CampainPrice}</h6>
                                        </div>
                                        <div class="col text-center">
                                            <h5 class="text-secondary">Descuento</h5>
                                            <h6 class="h4 mb-2 hours">${data[i].kp_CampainDiscount}%</h6>
                                        </div>
                                        <div class="col text-end">
                                            <h5 class="text-secondary">Ahorro</h5>
                                            <h6 class="h4 mb-2 minutes">${data[i].kp_CampainSaving}</h6>
                                        </div>
                                    </div>
                                </div>
                                <!-- Description END -->

                                <!-- Buttons START -->
                                <div class="col-12 mt-3">
                                    <a class="btn btn-primary w-100 mb-2" href="/payment">Comprar<i
                                            class="bi bi-arrow-right ps-3"></i></a>
                                    <div class="col-12">
                                        <a class="btn btn-primary w-100 mb-0" href="/detail/${url}">Ver Más<i
                                                class="bi bi-arrow-right ps-3"></i></a>
                                    </div>
                                </div>
                                <!-- Buttons END -->

                            </div>
                        </div>
                        <!-- Content and Image END -->
                    </div>
                </section>
        
        `;

            const createCampain = document.body.appendChild(div);
            document.getElementById('campains').appendChild(createCampain);

        }

    });

// Create Promotion Index

const urlPromotion = 'https://testing-kuponner-production.up.railway.app/api/promotion';

fetch(urlPromotion)
    .then(res => res.json())
    .then(data => {

        for (let i = 7; i >= 0; i--) {

            let div = document.createElement('div');
            div.className = 'col-sm-6 col-xl-3';

            // Convert url to string
            let text = data[i].kp_PromotionName;
            let url = text.replace(/ /g, "-");

            // DateFormat
            moment.locale('es');
            let date = moment(`${data[i].kp_PromotionOfferTime}`);
            date = date.format('D MMMM, YYYY');

            div.innerHTML = `

            <!-- Promotion item START -->
            <!-- Card START -->
            <div class="card card-img-scale overflow-hidden bg-transparent">
              <!-- Image and overlay -->
              <div class="card-img-scale-wrapper rounded-3">
                <!-- Image -->
                <img src="${data[i].kp_PromotionImages}" class="card-img" alt="${data[i].kp_PromotionTag}">
                <!-- Discount -->
                <div class="position-absolute top-0 start-0 z-index-1 m-0">
                  <div class="badge bg-primary bg-opacity-75 text-white"><b
                      style="font-size: 1.3rem;">=${data[i].kp_PromotionDiscount}%</b></div>
                </div>
              </div>
            
              <!-- Card body -->
              <div class="card-body px-0">
                <div class="d-sm-flex justify-content-between align-items-center">
                  <!-- Avatar image -->
                  <div class="d-flex align-items-sm-center ms-sm-0" id="logoClient">
                    <div class="avatar flex-shrink-0">
                      <img class="avatar-img rounded-circle" width="32" height="32" src="${data[i].kp_PromotionLogoClient}"
                        alt="">
                    </div>
                  </div>
                  <!-- Title -->
                  <div class="ms-3">
                    <h5 class="card-title"><a href="/detail/${url}" class="stretched-link">${data[i].kp_PromotionName}</a></h5>
                    <h6 class="fw-light m-0" style="text-align: justify;">${data[i].kp_PromotionDescription}</h6>
                    <small class="me-3">Termina: ${date}</small>
                  </div>
                </div>
              </div>
            </div>
            <!-- Price and Button -->
            <div class="d-sm-flex justify-content-sm-between align-items-center pb-3 border-bottom">
              <!-- Price -->
              <div class="d-flex align-items-center">
                <small>Paga:</small>
                <h5 class="fw-normal text-primary mb-0"><b>$${data[i].kp_PromotionPrice}</b></h5>
              </div>
              <!-- Button -->
              <div class="mt-2 mt-sm-0">
                <a href="/cart" class="btn btn-sm btn-primary-soft mb-0 w-100 pt-2">Añadir
                  al carrito<i class="bi bi-cart ms-2"></i></a>
              </div>
            </div>
            <!-- Card END -->
            <!-- Promotion item END -->
        
        `;

            const indexPromotion = document.body.appendChild(div);
            document.getElementById('indexPromotions').appendChild(indexPromotion);

        }

    });

