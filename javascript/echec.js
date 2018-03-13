var taille=8,actif , i=0,prisblanc=0,prisnoir=0,tour=0,victorieux, durees=0,dureem=0;
var pionblanc=new Array;
var pionnoir=new Array;
var possible=new Array;


//determine l equipe de chaque joueur suivant le gout du joueur1
//et deplace les bannieres des équipes pour les mettres a coté de leur joueur respectif
function equipej1(equipe)
{
	vision(1);
	if(equipe=="Mario")
	{
		$("#fondsonic").css({top: 0, rigth: 0, position:'absolute'});
		$("#fondmario").css({bottom: 0, rigth: 0, position:'absolute'});
		$("#joueur1").addClass("Mario");
		$("#joueur2").addClass("Sonic");
	}
	else if(equipe=="Sonic")
	{
		$("#fondsonic").css({bottom: 0, rigth: 0, position:'absolute'});
		$("#fondmario").css({top: 0, rigth: 0, position:'absolute'});
		$("#joueur2").addClass("Mario");
		$("#joueur1").addClass("Sonic");
	}
}

//permet de jouer si les deux noms ont ete rentres
//sinon ne fais rien
function test_start()
{
	if(($("#joueur1").val()!="")&&($("#joueur2").val()!=""))
	{
		start()
	}
}

//cree l echequier et permet les evenements sur les cases
//cree une horloge pour la partie et le temps de jeu pour chaque joueur
function start()
{
	var j,colonne,etat,ligne,temp,temp2,click=0,tour_totale=1,chrono,calcul_chrono,chronos=0,chronom=2,tmp=0,fait=0;
	vision(2);
	$("#joueur").val("A "+$("#joueur1").val()+" de jouer");
	setInterval(function()
	{
		$("#temp_de_jeu").val('duree de jeu: '+dureem+" : "+durees);
		durees++;
		if(durees==60)
		{
			dureem++;
			durees=0;
		}
	}, 1000);

	for(i=0;i<taille;i++)
	{

		$('#echequier').append($('<tr></tr>').attr('class','l'+i));
		temp='.l'+i;	
		for(j=0;j<taille;j++)
		{
			colonne=$('<td></td>');
			if(i<2)
			{
				$(colonne).addClass('blanc');
				if($("#joueur1").hasClass("Sonic"))
				{
					$(colonne).addClass("Mario");
				}
				else
				{
					$(colonne).addClass("Sonic");
				}
			}
			else if(i>5)
			{
				$(colonne).addClass('noir');
				if($("#joueur1").hasClass("Sonic"))
				{
					$(colonne).addClass("Sonic");
				}
				else
				{
					$(colonne).addClass("Mario");
				}
			}
			if((i==1)||(i==6))
			{
				if(j%2==0)
				{
						$(colonne).addClass("p1");
				}
				else
				{
						$(colonne).addClass("p2");
				}
			}
			temp2='.l'+i+' .c'+j;
			if(((j%2==0)&&(i%2==1))||((j%2==1)&&(i%2==0)))
			{
				etat='pair';
			}
			else
			{
				etat='impair';
			}
			$(temp).append($(colonne).addClass('c'+j).addClass('.l'+i).addClass(etat));
			$(temp2).click(function(event,frozen_i,frozen_j) 
			{
				$("#tour").val('tour : '+tour_totale);
				var couleur;
				if($(this).hasClass('possible'))
				{
					limitationblanc(0);
					limitationnoir(0);
					if($(actif).hasClass('noir'))
					{
						couleur=0;
					}
					else if($(actif).hasClass('blanc'))
					{
						couleur=1;				
					}
					if(couleur==tour)
					{
						
						tour=1-couleur;
						coupjouer(this);
						echec(couleur);
						tour_totale++;
						$("#tour").val('tour : '+tour_totale);
						click=1;
						fait=0;
						tmp=0;
						chronos=0;
						chronom=2;
						if((tour==0)&&(!$("#joueur1").hasClass('echec')))
						{
							$("#joueur").val("A "+$("#joueur1").val()+" de jouer");
						}
						else if((tour==1)&&(!$("#joueur2").hasClass('echec')))
						{
							$("#joueur").val("A "+$("#joueur2").val()+" de jouer");
						}
						else if((tour==0)&&($("#joueur1").hasClass('echec')))
						{
							$("#joueur").val("A "+$("#joueur1").val()+" de jouer. Attention vous êtes en echec");
						}
						else if((tour==1)&&($("#joueur2").hasClass('echec')))
						{
							$("#joueur").val("A "+$("#joueur2").val()+" de jouer. Attention vous êtes en echec");
						}
						$("#horloge").val('temp '+chronom+" : "+chronos);
						clearInterval(chrono);
						clearTimeout(calcul_chrono);
					}
				}
				else
				{
					recensement();
					limitationblanc(1);
					limitationnoir(1);
					if($(this).hasClass('noir'))
					{
						couleur=0;
					}
					else if($(this).hasClass('blanc'))
					{
						couleur=1;
					}
					if(couleur==tour)
					{
						click=0;
						if(fait==0)
						{
							chrono=setInterval(function() 
							{
								if(click==0)
								{
									$("#horloge").val('temp '+chronom+" : "+chronos);
									chronos--;
									fait++;
									if((chronos<=0)&&(tmp==0))
									{
										chronom--;
										chronos=59;
										tmp=1;
									}
									else if((chronos==0) &&(tmp==1))
									{
										chronos=0;
										tmp=0;
									}
								}
							}, 1000);
							calcul_chrono=setTimeout(function()
							{ 
								echec(tour);
								tour=1-couleur;
								click=0;
								chronos=0;
								$("#horloge").val('temp '+chronom+" : "+chronos);
								chronom=2;
								fait=0;
								tmp=0;
								if(tour==0)
								{
									$("#joueur").val($("#joueur1").val());
								}
								else
								{
									$("#joueur").val($("#joueur2").val());
								}
								clearInterval(chrono);
								clearInterval(calcul_chrono);
							}, 120000);
						}
						if($(this).hasClass('active'))
						{		
							for(var i=0;i<possible.length;i++)
							{
								$(possible[i]).removeClass('possible');
								possible[i]=('');
							}		
							$(actif).removeClass('active');
							actif=('');
						}
						if($(this).hasClass('pion')||$(this).hasClass("tour")||$(this).hasClass("fou")||$(this).hasClass("cavalier")||$(this).hasClass("roi")||$(this).hasClass("reine"))
						{				
							for(var i=0;i<possible.length;i++)
							{
								$(possible[i]).removeClass('possible');
							}
							$(actif).removeClass('active');
							$(this).addClass('active');
							coup_jouable(this);
						}
					}
				}
			});
			if((i==1)||(i==6))
			{
				$(colonne).addClass('pion');
				$(colonne).addClass('nonjoue');
			}
			if((i==7)||(i==0))
			{
				if(j%7==0)
				{
					$(colonne).addClass('tour');
				}
				else if(j%7==1||j%7==6)
				{
					$(colonne).addClass('cavalier');
				}
				else if(j%7==2||j%7==5)
				{
					$(colonne).addClass('fou');
				}
				if(i==0)
				{
					if(j==4)
					{
						$(colonne).addClass('reine');
					}
					else if(j==3)
					{
						$(colonne).addClass('roi');
					}
				}
				else if(i==7)
				{
					if(j==4)
					{
						$(colonne).addClass('roi');
					}
					else if(j==3)
					{
						$(colonne).addClass('reine');
					}
				}							
			}
		}
	}
}


//regarde les coups legaux et affiche les cases possibles suivant le pion choisit
function coup_jouable(donne)
{
	possible=new Array;
	var verif,couleur,verifc;
	var i=0;
	echequier=document.getElementById('echequier');
	actif=donne;
	if($(actif).hasClass('noir'))
	{
		couleur=0;
	}
	else if($(actif).hasClass('blanc'))
	{
		couleur=1;	
	}
	else
	{
		couleur=2;
	}
	var c,l;
	for(i=0; i<taille;i++)
	{
		if($(donne).hasClass('c'+i))
		{
			c=i;
		}
		if($(donne).hasClass('.l'+i))
		{
			l=i;
		}
	}
	if(($(actif).hasClass('noir'))||($(actif).hasClass('blanc')))
	{
		if($(actif).hasClass('pion'))
		{
			legalpion( c, l,donne,couleur);
		}
		if($(actif).hasClass('cavalier'))
		{
			legalcavalier( c, l,donne,couleur);
		}
		if($(actif).hasClass('roi'))
		{
			legalroi( c, l,donne,couleur);
		}
		if($(actif).hasClass('tour')||$(actif).hasClass('reine'))
		{
			legaltour( c, l,donne,couleur);
		}	
		if($(actif).hasClass('fou')||$(actif).hasClass('reine'))
		{
			legalfou( c, l,donne,couleur);
		}	
		for(var i=0;i<possible.length;i++)
		{
			$(possible[i]).addClass('possible');
			$(possible[i]).removeClass('active');
		}
	}
}

//recense tous les pions sur le terrain de chaque couleur
function recensement()
{
	var j,temp2,blanc=0,noir=0;
	pionblanc=[""];
	pionnoir=[""];
	for(i=0;i<taille;i++)
	{
		for(j=0;j<taille;j++)
		{
			temp2=echequier.getElementsByClassName('c'+i+' .l'+j+'')[0];
			if($(temp2).hasClass('blanc'))
			{
				pionblanc[blanc]=temp2;
				blanc++;
			}
			else if($(temp2).hasClass('noir'))
			{
				pionnoir[noir]=temp2;
				noir++;
			}
		}
	}
}

// affiche l equipe gagnante et donne le nom du vainqueur et permet de rejouer la partie
function perdu()
{
	vision(5);
	if(tour==0)
	{
		if($("#joueur1").hasClass('Mario'))
		{
			$(document.body).css('background-image', 'url("../image/sonic_winner.jpg")');
			$("#vainqueur").val($("#joueur2").val()+" a gagné");
		}
		else if($("#joueur1").hasClass('Sonic'))
		{
			$(document.body).css('background-image', 'url("../image/mario_winner.jpg")');
			$("#vainqueur").val($("#joueur2").val()+" a gagné");
		}
	}
	else
	{
		if($("#joueur1").hasClass('Mario'))
		{
			$(document.body).css('background-image', 'url("../image/mario_winner.jpg")');
			$("#vainqueur").val($("#joueur1").val()+" a gagné");
		}
		else if($("#joueur1").hasClass('Sonic'))
		{
			$(document.body).css('background-image', 'url("../image/sonic_winner.jpg")');
			$("#vainqueur").val($("#joueur1").val()+" a gagné");
			equipevictorieuse="Sonic";
		}
		victorieux=joueur1;
	}
	setTimeout(function()
	{ 
		if(confirm("Vous avez fini cette partie, voulez vous rejouez ? "))
		{
			location.reload() ; 
		}
	}, 6000);
}

//fonction permet la vision des jeux suivant l option choisit
function vision(info)
{
	if(info==0)
	{
		$("#vainqueur").hide();
		$("#fondmario").hide();
		$("#fondsonic").hide();
		$("#joueur1").hide();
		$("#joueur2").hide();
		$("#valider").hide();
		$("#echequier").hide();
		$(".pris_noir").hide();
		$(".pris_blanc").hide();
		$("#Abandon").hide();
		$("#tour").hide();
		$("#temp_de_jeu").hide();
		$("#joueur").hide();
		$("#horloge").hide();
		$("#amy").hide();
		$("#shadow").hide();
		$("#tails").hide();
		$("#knuckles").hide();
		$("#peach").hide();
		$("#luigi").hide();
		$("#yoshi").hide();
		$("#bowser").hide();
	}
	else if(info==1)
	{
		$("#Choix_equipe").hide();
		$("#mario").hide();
		$("#sonic").hide();
		$("#joueur1").show();
		$("#joueur2").show();
		$("#valider").show();
		$("#fondsonic").show();
		$("#fondmario").show();
	}
	else if (info==2)
	{
		$("#joueur1").hide();
		$("#joueur2").hide();
		$("#valider").hide();
		$("#echequier").show();
		$("#Abandon").show();
		$("#tour").show();
		$("#temp_de_jeu").show();
		$("#joueur").show();
		$("#fondsonic").show();
		$("#fondmario").show();
		$("#horloge").show();
	}
	else if(info==3)
	{
		vision(0);
		$("#peach").show();
		$("#luigi").show();
		$("#yoshi").show();
		$("#bowser").show();
		if(((tour==1)&&($(joueur1).hasClass('Mario')))||((tour==0)&&($(joueur2).hasClass('Mario'))))
		{
			$("#fondmario").show();
		}

	}
	else  if(info==4)
	{
		vision(0);
		$("#amy").show();
		$("#shadow").show();
		$("#tails").show();
		$("#knuckles").show();
		if(((tour==1)&&($(joueur1).hasClass('Sonic')))||((tour==0)&&($(joueur2).hasClass('Sonic'))))
		{
			$("#fondsonic").show();
		}
	}
	else if (info==5)
	{
		$('#vainqueur').show();
		$('#echequier').hide();
		$('#horloge').hide();
		$('#temp_de_jeu').hide();
		$('#tour').hide();
		$('#Abandon').hide();
		$('.pris_blanc').hide();
		$('.pris_noir').hide();
		$('#joueur').hide();
		$("#fondsonic").hide();
		$("#fondmario").hide();
	}
}