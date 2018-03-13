var evolutionpion,fenetre;

//prend la case que le joueur a choisi, et met les caracteristiques du pion bouge sur la case choisie et les enleves de la position jouante
function coupjouer( jouer)
{
	var verifc,couleur;
	var tab=new Array;
	for(var i=0;i<possible.length;i++)
	{
		$(possible[i]).removeClass('possible');
		possible[i]=('');
		$(actif).removeClass('active');
	}		
	if($(jouer).hasClass('noir'))
	{
		verifc=0;
	}
	else if($(jouer).hasClass('blanc'))
	{
		verifc=1;	
	}
	else
	{
		verifc=2;
	}
	if($(actif).hasClass('noir'))
	{
		couleur=0;
	}
	else if($(actif).hasClass('blanc'))
	{
		couleur=1;	
	}
	if((!$(jouer).hasClass('roi'))&&((verifc!=couleur)||(verifc!=2)))
	{
		prise(jouer);
		if($(actif).hasClass('noir'))
		{
			$(jouer).addClass('noir');
			$(actif).removeClass('noir');
			if($(jouer).hasClass('blanc'))
			{
				$(jouer).removeClass('blanc');
			}
		}
		else if ($(actif).hasClass('blanc'))
		{
			$(jouer).addClass('blanc');
			$(actif).removeClass('blanc');
			if($(jouer).hasClass('noir'))
			{
				$(jouer).removeClass('noir');
			}
		}
		if($(actif).hasClass('Mario'))
		{
			$(jouer).addClass('Mario');
			$(actif).removeClass('Mario');
		}
		else
		{
			$(jouer).addClass('Sonic');
			$(actif).removeClass('Sonic');
		}
		if($(actif).hasClass('pion'))
		{
			if((($(jouer).hasClass(".l0"))&&($(jouer).hasClass("noir"))||($(jouer).hasClass(".l7"))&&($(jouer).hasClass("blanc"))))
			{
				evolutionpion=jouer;
				if((($("#joueur1").hasClass("Mario"))&&(tour==1))||(($("#joueur2").hasClass("Mario"))&&(tour==0)))
				{
					vision(3);
				}
				else if ((($("#joueur1").hasClass("Sonic"))&&(tour==1))||(($("#joueur2").hasClass("Sonic"))&&(tour==0)))
				{
					vision(4);
				}
			}
			else
			{
				if($(actif).hasClass('p1'))
				{
					if($(jouer).hasClass('p2'))
					{
						$(jouer).removeClass('p2');
					}
					$(jouer).addClass('p1');
					$(actif).removeClass('p1');
				}
				else if($(actif).hasClass('p2'))
				{
					if($(jouer).hasClass('p1'))
					{
						$(jouer).removeClass('p1');
					}
					$(jouer).addClass('p2');
					$(actif).removeClass('p2');
				}
				$(jouer).addClass('pion');
				$(actif).removeClass('pion');
			}
		}
		if($(actif).hasClass('cavalier'))
		{
			$(jouer).addClass('cavalier');
			$(actif).removeClass('cavalier');
		}
		if($(actif).hasClass('tour'))
		{
			$(jouer).addClass('tour');
			$(actif).removeClass('tour');
		}
		if($(actif).hasClass('fou'))
		{
			$(jouer).addClass('fou');
			$(actif).removeClass('fou');
		}
		if($(actif).hasClass('reine'))
		{
			$(jouer).addClass('reine');
			$(actif).removeClass('reine');
		}
		if($(actif).hasClass('roi'))
		{
			$(jouer).addClass('roi');
			$(actif).removeClass('roi');
		}
	}
	else
	{
		perdu();
	}
}

//prend la case ou l on a jouer et si elle a une valeur particuliere elle envoie ses caracteristiques
// au tableau des pions pris correspondant a la couleur du pion pris et les supprimes de la case.
function prise(jouer)
{
	var elem,ligne,pris;

	if($(jouer).hasClass('blanc'))
	{	
		$(".pris_blanc").show();
		ligne=document.getElementById('ligneb');
		prisblanc++;
		$('#ligneb').append($('<td></td>').attr('class','num'+prisblanc));
		elem=ligne.getElementsByClassName( 'num'+(prisblanc));
	}	
	else if($(jouer).hasClass('noir'))
	{
		$(".pris_noir").show();
		ligne=document.getElementById( 'lignen');
		prisnoir++;
		$('#lignen').append($('<td></td>').attr('class','num'+prisnoir));
		elem=ligne.getElementsByClassName("num"+(prisnoir));
	}
	if($(jouer).hasClass("Mario"))
	{
		$(elem).addClass('Mario');
		$(jouer).removeClass('Mario');
	}
	else if($(jouer).hasClass("Sonic"))
	{
		$(elem).addClass('Sonic');
		$(jouer).removeClass('Sonic');
	}
	if($(jouer).hasClass('pion'))
	{
		if($(jouer).hasClass("p1"))
		{
			$(jouer).removeClass('p1');
			$(elem).addClass('p1');
		}
		else
		{
			$(jouer).removeClass('p2');
			$(elem).addClass('p2');
		}
		$(elem).addClass('pionpris');
		$(jouer).removeClass('pion');
	}
	else if($(jouer).hasClass('reine'))
	{
		$(elem).addClass('reinepris');
		$(jouer).removeClass('reine');
	}
	else if($(jouer).hasClass('tour'))
	{
		$(elem).addClass('tourpris');
		$(jouer).removeClass('tour');
	}
	else if($(jouer).hasClass('fou'))
	{
		$(elem).addClass('foupris');
		$(jouer).removeClass('fou');
	}
	else if($(jouer).hasClass('cavalier'))
	{
		$(elem).addClass('cavalierpris');
		$(jouer).removeClass('cavalier');
	}
}

//affiche les valeurs possible d evolution pour chaque couleur de pion
function evolution(personnage)
{
	$(evolutionpion).removeClass('pion');
	if($(evolutionpion).hasClass("p1"))
	{
		$(evolutionpion).removeClass('p1');
	}
	else
	{
		$(evolutionpion).removeClass('p2');
	}
	if(personnage==0)
	{
		$(evolutionpion).addClass("reine");
	}
	else if(personnage==1)
	{
		$(evolutionpion).addClass("cavalier");
	}
	else if(personnage==2)
	{
		$(evolutionpion).addClass("fou");
	}
	else if(personnage==3)
	{
		$(evolutionpion).addClass("tour");
	}
	vision(0);
	vision(2);
}