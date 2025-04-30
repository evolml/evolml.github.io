;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};



	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			animateIn: 'fadeIn',
        animateOut: 'fadeOut'
		});
	};

	// Page Nav
	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 55
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};


	// Animations
	// Home
	var homeAnimate = function() {
		if ( $('#fh5co-home').length > 0 ) {	

			$('#fh5co-home').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						$('#fh5co-home .to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var exploreAnimate = function() {

		var explore = $('#fh5co-explore');
		if ( explore.length > 0 ) {	

			explore.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						explore.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						explore.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 700);

					setTimeout(function() {
						explore.find('.to-animate-3').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 1000);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var testimonyAnimate = function() {
		var testimony = $('#fh5co-testimony');
		if ( testimony.length > 0 ) {	

			testimony.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						testimony.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var gettingStartedAnimate = function() {
		var started = $('.getting-started-1');
		if ( started.length > 0 ) {	

			started.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						started.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						started.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var gettingStarted2Animate = function() {
		var started = $('.getting-started-2');
		if ( started.length > 0 ) {	

			started.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						started.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						started.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInRight animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var pricingAnimate = function() {
		var pricing = $('#fh5co-pricing');
		if ( pricing.length > 0 ) {	

			pricing.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					setTimeout(function() {
						pricing.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						pricing.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var servicesAnimate = function() {
		var services = $('#fh5co-services');
		if ( services.length > 0 ) {	

			services.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {


					var sec = services.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						services.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						services.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var teamAnimate = function() {
		var team = $('#fh5co-team');
		if ( team.length > 0 ) {	

			team.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = team.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function() {
						team.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						team.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	
	var faqAnimate = function() {
		var faq = $('#fh5co-faq');
		if ( faq.length > 0 ) {	

			faq.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = faq.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);
						
					setTimeout(function() {
						faq.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						faq.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeInUp animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var trustedAnimate = function() {
		var trusted = $('#fh5co-trusted');
		if ( trusted.length > 0 ) {	

			trusted.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					var sec = trusted.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);
						
					setTimeout(function() {
						trusted.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					setTimeout(function() {
						trusted.find('.to-animate-2').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('bounceIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, sec);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};


	var footerAnimate = function() {
		var footer = $('#fh5co-footer');
		if ( footer.length > 0 ) {	

			footer.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						footer.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var blogAnimate = function() {
		var footer = $('#fh5co-blog');
		if ( footer.length > 0 ) {	

			footer.waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(function() {
						footer.find('.to-animate').each(function( k ) {
							var el = $(this);
							
							setTimeout ( function () {
								el.addClass('fadeIn animated');
							},  k * 200, 'easeInOutExpo' );
							
						});
					}, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );

		}
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter-section').length > 0 ) {
			$('#fh5co-counter-section').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '90%' } );
		}
	};

    function showHomeDiv(win){
        $('.msg_box').html('')
        $('.msg_box').hide()
        if (win == 'register'){
            $('#register').show()
            $('#login').hide()
            $('#def_home').hide()
        }else if (win == 'login'){
            $('#register').hide()
            $('#login').show()
            $('#def_home').hide()
        }else{
            $('#register').hide()
            $('#login').hide()
            $('#def_home').show()
        }

    }

    function frgtPass(){
            
        event.preventDefault()
       
        /*
        $('.msg_box').show()
        $('.msg_box').html('This feature is not available now !')
        return false
        */
        
        let frmVals = {}

        console.log('frgtPass')
        $('.msg_box').html('')
        $('.msg_box').hide()

        let frgtUrl = 'api/forgot.php'
        let misMsg = 'To generate password, a valid registered email required !'
        let mail = $('#frm_lgn [name=email]').val()
        if (mail == ''){
            $('.msg_box').show()
            $('.msg_box').html(misMsg)
            return false
        }

        frmVals['email'] = mail
        $('#btn_frgt').prop('disabled',true)
        $('.msg_box').html('Generating password, please wait ..')
        $('.msg_box').show()

        console.log(frmVals)
        $.ajax({
            url: frgtUrl,
            type: "POST",
            data: frmVals,
            success: (data) => {
                switch (data.status){
                    case 'success': 
                        $('.msg_box').html('New password is sent to your email !')
                        $('.msg_box').show()
                        break;
                    case 'notexists': 
                        $('.msg_box').html('User does not exist !')
                        $('.msg_box').show()
                        break;
                    case 'insfail': 
                        $('.msg_box').html('Error resetting password !')
                        $('.msg_box').show()
                        break;
                    default:
                        console.log("login invalid status")
                }
                console.log("Get ajax ok: " + data.status)
                $('#btn_frgt').removeAttr('disabled')
            },
            error: (err) => {
                console.log("Ajax Err: " + JSON.stringify(err))
                $('#btn_frgt').removeAttr('disabled')
                $('.msg_box').html('Error generating password, please try later ..')
            }
        })
    }

    function chPass(){

        event.preventDefault()
        $('.msg_chp').html('')
        $('.msg_chp').hide()

        let frmVals = {}
        let lgnUrl = 'api/chps.php'

        let pass0 = $('#pass0').val()
        let pass1 = $('#pass1').val()
        let pass2 = $('#pass2').val()
        
        if (pass0.length == 0){
            $('.msg_chp').html('Current password should not be empty !')
            $('.msg_chp').show()
            console.log('crPass not size')

            return false
        }

        if (pass1 != pass2){
            $('.msg_chp').html('Passwords are not same !')
            $('.msg_chp').show()
            console.log('chPass not match')

            return false
        }
        
        if (pass1.length < 8){
            $('.msg_chp').html('Password should be 8 or more characters !')
            $('.msg_chp').show()
            console.log('chPass not size')

            return false
        }


        frmVals['oldpass'] = pass0
        frmVals['newpass'] = pass1
        console.log('chPass ajx')
        
        $('.msg_chp').html('')
        $('.msg_chp').hide()
        
        $.ajax({
            url: lgnUrl,
            type: "POST",
            data: frmVals,
            success: (data) => {
                console.log(data);
                switch (data.status){
                    case 'success': 
                        $('.msg_chp').html('Success changing password !')
                        $('.msg_chp').show()
                        break;
                    case 'invpss': 
                        $('.msg_chp').html('Incorrect current password !')
                        $('.msg_chp').show()
                        break;
                    default:
                        $('.msg_chp').html('Failure changing password !')
                        $('.msg_chp').show()
                        console.log("Password change failed")
                }
                console.log("Get ajax ok: " + data.status)
            },
            error: (err) => {
                console.log("Ajax Err: " + JSON.stringify(err))
                $('.msg_chp').html('Something went wrong !')
                $('.msg_chp').hide()
            }
        })
    }

    function logoUser(){

        event.preventDefault()
        let frmVals = {}
        let lgnUrl = 'api/logout.php'
        
        $.ajax({
            url: lgnUrl,
            type: "POST",
            data: frmVals,
            success: (data) => {
                console.log(data);
                switch (data.status){
                    case 'success': 
                        //$('.msg_box').html('Logout Success !')
                        //$('.msg_box').show()
                        location.reload()
                        break;
                    default:
                        console.log("logout failed")
                }
                console.log("Get ajax ok: " + data.status)
            },
            error: (err) => {
                console.log("Ajax Err: " + JSON.stringify(err))
            }
        })
    }

    function authUser(){

        /*
        console.log('authUser')
        $('.msg_box').html('Login is not allowed for now, wait for a notification.')
        $('.msg_box').show()
        return
        */

        let lgnUrl = 'api/login.php'
        let misMsg = 'Missing values for : ';
        let misFlg = 0
        var frmVals = $('#frm_lgn').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            if (item.value == ''){
                misFlg = 1
                misMsg += item.name + ' ' 
            }
            return obj
        }, {})
        if (misFlg){
            $('.msg_box').show()
            $('.msg_box').html(misMsg)
            return
        }

        console.log(frmVals)
        $.ajax({
            url: lgnUrl,
            type: "POST",
            data: frmVals,
            success: (data) => {
                switch (data.status){
                    case 'success': 
                        $('.msg_box').html('Login Success !')
                        $('.msg_box').show()
                        location.reload()
                        break;
                    case 'invusr': 
                        $('.msg_box').html('User does not exist !')
                        $('.msg_box').show()
                        break;
                    case 'invpss': 
                        $('.msg_box').html('Incorrect password !')
                        $('.msg_box').show()
                        break;
                    default:
                        console.log("login invalid status")
                }
                console.log("Get ajax ok: " + data.status)
            },
            error: (err) => {
                console.log("Ajax Err: " + JSON.stringify(err))
            }
        })
    }

    function regUser(){

        /*
       
            https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery
             
            (function($){
                $.fn.getFormData = function(){
                var data = {};
                var dataArray = $(this).serializeArray();
                    for(var i=0;i<dataArray.length;i++){
                        data[dataArray[i].name] = dataArray[i].value;
                    }
                    return data;
                }
            })(jQuery);

            var myData = $("#myForm").getFormData();

        */

        event.preventDefault()


        console.log('regUser')
        $('.msg_box').html('')
        $('.msg_box').hide()

        let regUrl = 'api/register.php'
        let misMsg = 'Missing values for : ';
        let misFlg = 0
        var frmVals = $('#frm_reg').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            if (item.name == 'mobile'){
                return obj
            }
            if (item.value == ''){
                misFlg = 1
                misMsg += item.name + ' ' 
            }
            return obj
        }, {})
        if (misFlg){
            $('.msg_box').show()
            $('.msg_box').html(misMsg)
            return
        }

        let mailMatch = frmVals["email"].match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (! mailMatch){
            $('.msg_box').html("Invalid email address given !")
            $('.msg_box').show()
            return
        }

        frmVals['idproof'] = $('#idproof').prop('files')[0]
            
        let frmData = new FormData($('#frm_reg')[0])

        //console.log(frmVals)
        
        $.ajax({
            url: regUrl,
            type: "POST",
            enctype: 'multipart/form-data',
            processData: false, 
            contentType: false,
            data: frmData,
            success: (data) => {
                let regMsg = 'Registration successful !<br />We will send email with details.'
                switch (data.status){
                    case 'success': 
                        $('.msg_box').html(regMsg)
                        $('.msg_box').show()
                        break;
                    case 'exists': 
                        $('.msg_box').html('Email already registered !')
                        $('.msg_box').show()
                        break;
                    case 'invcpch': 
                        $('.msg_box').html('Incorrect captcha !')
                        $('.msg_box').show()
                        break;
                    case 'upldfail': 
                        $('.msg_box').html('ID proof missing !')
                        $('.msg_box').show()
                        break;
                    default:
                        console.log("login invalid status")
                }
            },
            error: (err) => {
                console.log("Ajax Err: " + JSON.stringify(err))
            }
        })
    }

    function mailsToBulk(){
        console.log('mailsToBulk')
        if ($.fn.dataTable.isDataTable("#tbl_data")){
            let datTbl = $("#tbl_data").DataTable();
            console.log(datTbl.rows().count())
            let mailsStr = datTbl.column(1).data().toArray().join(',')
            console.log(mailsStr)
            $('#txt_blkmailids').val(mailsStr)
        }
    }

    function filterDatatable(val){
        if ($.fn.dataTable.isDataTable("#tbl_data")){
            let datTbl = $("#tbl_data").DataTable()
            datTbl.columns(2).search(val, true, false).draw()
        }
    }

    function loadUsers(){
        let apiUrl = "api/users.php"
        let datTbl
        let formData = {}
    
        function loadList(items){
        if ($.fn.dataTable.isDataTable("#tbl_data")){
            datTbl.clear().draw()
            datTbl.rows.add(items)
            datTbl.draw()
        }else{
            datTbl = $("#tbl_data").DataTable({
                responsive: false,
                dom: '<"dtbtns"ip><t><"dtbtns"B>',
                buttons: {   
                    buttons: [
                        {extend: 'csv', className: 'btn-sm btn-primary'},
                        {extend: 'pdf', className: 'btn-sm btn-primary'}
                    ]
                },
    
                data: items,
                columns: [
                    {data: "name",title: "Name"},
                    {data: "mail",title: "Email"},
                    {data: "type",title: "Type"},
                    {data: "designation",title: "Designation"},
                    {data: "affiliation",title: "Affiliation"},
                    {data: "city",title: "City"},
                    {data: "country",title: "Country"},
                    {data: "mobile",title: "Mobile"},
                ]
            })
        }
        }
     
        formData["mode"] = "list"
        $.ajax({
            url: apiUrl,
            type: "POST",
            data: formData,
            success: (data) => {
                //console.log("Get ajax ok: " + JSON.stringify(data))
                $("#tbl_data").empty()
                loadList(data.data)
            },
            error: (err) => {console.log("Ajax Err: " + JSON.stringify(err))}
        })
    }

    function blkEmail(){
        let formData = {}
        let apiUrl = "api/bulkmail.php"
        let txtBlkMailIds = $('#txt_blkmailids').val()
        let txtBlkMailBdy = $('#txt_blkmailbdy').val().replace(/\n/g, '<br />' )
        let blkMailIds = txtBlkMailIds.split(',')
        let emailRe = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        $('#blk_msg').text('')
        let validEmailIds = true
        $.each(blkMailIds, function(k,v){
            if (! emailRe.test(v.trim())){
                console.log("invalid email: " + v)
                validEmailIds = false
            }
        })
       
        if (! validEmailIds){
            $('#blk_msg').text('invalid email id')
            return false
        }

        if (! txtBlkMailBdy){
            console.log("no mail content")
            $('#blk_msg').text('no email content')
            return false
        }

        formData["ids"] = txtBlkMailIds
        formData["bdy"] = txtBlkMailBdy

        console.log(formData)
        $('#blk_msg').text('Sending mails, please wait ..')
        $('#btn_blk').prop('disabled',true)

        $.ajax({
            url: apiUrl,
            type: "POST",
            data: formData,
            success: (data) => {
                console.log("Get ajax ok: " + JSON.stringify(data))
                let sentCount = data.sent.length
                let failCount = data.fail.length
                $('#blk_msg').text('Result sent:'+ sentCount +' fail: '+ failCount + ' !')
                $('#btn_blk').removeAttr('disabled')
                $('#btn_blk').val('Send')
            },
            error: (err) => {
                $('#blk_msg').text('Error sending emails !')
                console.log("Ajax Err: " + JSON.stringify(err))
                $('#btn_blk').removeAttr('disabled')
            }
        })

    }

	// Document on load.
	$(function(){
        
        $("#pdfview").hide()

		parallax();
		burgerMenu();
		clickMenu();
		windowScroll();
		navigationSection();
		testimonialCarousel();
		
		// Animations
		homeAnimate();
		exploreAnimate();
		testimonyAnimate();
		gettingStartedAnimate();
		gettingStarted2Animate();
		pricingAnimate();
		servicesAnimate();
		teamAnimate();
		faqAnimate();
		trustedAnimate();
		footerAnimate();
		blogAnimate();
		counter();
		counterWayPoint();
        //showHomeDiv('register');
        $('.msg_box').hide()
        showHomeDiv('def_home');

        loadUsers()

        $('#btn_reg').click(function(){showHomeDiv('register'); event.preventDefault()})
        $('#btn_lgn').click(function(){showHomeDiv('login'); event.preventDefault()})
        $('#btn_add').click(function(){regUser(); event.preventDefault()})
        $('.btn_cncl').click(function(){showHomeDiv('def_home'); event.preventDefault()})
        $('#btn_auth').click(function(){authUser(); event.preventDefault()})
        $('#btn_lgo').click(function(){logoUser(); event.preventDefault()})
        $('#btn_upp').click(function(){chPass(); event.preventDefault()})
        $('#btn_frgt').click(function(){frgtPass(); event.preventDefault()})
        $('#btn_blk').click(function(){blkEmail(); event.preventDefault()})
        $("#capref").click(function() { $("#capimg").attr("src", "api/captcha.php?t=" + new Date().getTime()) })
        $("#pdfview .btn_cls").on('click',function(){$('#pdfview').hide(); })
        $("#pssview .btn_cls").on('click',function(){$('#pssview').hide(); })
        $("#ids_to_bulk").on('click',function(){mailsToBulk()})
        $("#fltr_dattbl").on('click',function(){filterDatatable('admin')})

	});



}());
