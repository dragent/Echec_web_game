
//donne les positions jouables par la tour
function legaltour( c, l,donne,couleur)
{
		var verif,verifc,bloque=0,x=1;
		while((l+x)<8&&bloque==0)
		{
			verif=echequier.getElementsByClassName('c'+c+' .l'+(l+x)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc!=couleur)
			{
				possible[i]=verif;
			}
			if(verifc!=2)
			{
					bloque=1;
			}
			i++;
			x++;
		}
		bloque=0;
		x=1;
		while(0<=(l-x)&&bloque==0)
		{				
			verif=echequier.getElementsByClassName('c'+c+' .l'+(l-x)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc!=couleur)
			{
				possible[i]=verif;
			}
			if(verifc!=2)
			{
					bloque=1;
			}
			i++;
			x++;
		}
		 bloque=0;
		x=1;
		while((c-x)>=0&&bloque==0)
		{
			verif=echequier.getElementsByClassName('c'+(c-x)+' .l'+l+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc!=couleur)
			{
				possible[i]=verif;
			}
			if(verifc!=2)
			{
					bloque=1;
			}
			i++;
			x++;
		}
		 bloque=0;
		x=1;
		while((c+x)<8&&bloque==0)
		{
			verif=echequier.getElementsByClassName('c'+(c+x)+' .l'+l+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc!=couleur)
			{
				possible[i]=verif;
			}
			if(verifc!=2)
			{
					bloque=1;
			}
			i++;
			x++;
		}
}

//donne les positions jouables par le fou
function legalfou( c, l,donne,couleur)
{
	var verif,verifc,bloque=0,x=1,i=possible.length;
	while(((l-x)<8) && (bloque==0) && ((c+x)<8))
	{
		verif=echequier.getElementsByClassName('c'+(c+x)+' .l'+(l-x)+'')[0];
		if($(verif).hasClass('noir'))
		{
			verifc=0;
		}
		else if($(verif).hasClass('blanc'))
		{
			verifc=1;	
		}
		else
		{
			verifc=2;
		}
		if(verifc!=couleur)
		{
			possible[i]=verif;
		}
		if(verifc!=2)
		{
				bloque=1;
		}
		i++;
		x++;
	}
	bloque=0;
	x=1;
	while((0<=(l-x)) && (bloque==0) && (0<=(c-x)))
	{				
		verif=echequier.getElementsByClassName('c'+(c-x)+' .l'+(l-x)+'')[0];
		if($(verif).hasClass('noir'))
		{
			verifc=0;
		}
		else if($(verif).hasClass('blanc'))
		{
			verifc=1;	
		}
		else
		{
			verifc=2;
		}
		if(verifc!=couleur)
		{
			possible[i]=verif;
		}
		if(verifc!=2)
		{
				bloque=1;
		}
		i++;
		x++;
	}
	 bloque=0;
	x=1;
	while((0<=(c-x))&& (bloque==0) && 0<=((l+x)))
	{
		verif=echequier.getElementsByClassName('c'+(c-x)+' .l'+(l+x)+'')[0];
		if($(verif).hasClass('noir'))
		{
			verifc=0;
		}
		else if($(verif).hasClass('blanc'))
		{
			verifc=1;	
		}
		else
		{
			verifc=2;
		}
		if(verifc!=couleur)
		{
			possible[i]=verif;
		}
		if(verifc!=2)
		{
				bloque=1;
		}
		i++;
		x++;
	}
	 bloque=0;
	x=1;
	while(((c+x)<8) && (bloque==0) && ((l+x)<8))
	{
		verif=echequier.getElementsByClassName('c'+(c+x)+' .l'+(l+x)+'')[0];
		if($(verif).hasClass('noir'))
		{
			verifc=0;
		}
		else if($(verif).hasClass('blanc'))
		{
			verifc=1;	
		}
		else
		{
			verifc=2;
		}
		if(verifc!=couleur)
		{
			possible[i]=verif;
		}
		if(verifc!=2)
		{
				bloque=1;
		}
		i++;
		x++;
	}
}

//donne les positions jouables par le roi
function legalroi( col, lig,donne,couleur)
{
	var verif,verifc,tab=new Array,x,encadre=0,bloque=0;
	tab[0]=echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0];
	tab[1]=echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig)+'')[0];
	tab[2]=echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-1)+'')[0];
	tab[3]=echequier.getElementsByClassName('c'+(col)+' .l'+(lig+1)+'')[0];
	tab[4]=echequier.getElementsByClassName('c'+(col)+' .l'+(lig-1)+'')[0];
	tab[5]=echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0];
	tab[6]=echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig)+'')[0];
	tab[7]=echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-1)+'')[0];
	i=0;
	for(x=0;x<9;x++)
	{                                     
		if($(tab[x]).hasClass('noir'))
		{
			tab[x+9]=0;
		}
		else if($(tab[x]).hasClass('blanc'))
		{
			tab[x+9]=1;	
		}
		else
		{
			tab[x+9]=2;
		}
		if(tab[x+9]!=couleur)
		{
			possible[i]=tab[x];
			i++;
		}
	}
}


//determine si le roi de la couleur actuellement jouer est en echec a la fin du tour et fini la partie si oui
function echec(couleur)
{
	var x,roi,impossible=0,col,lig,tab=new Array,encadre=0,bloque=0,taille=0;
	recensement();
	limitationnoir(1);
	limitationblanc(1);
	if(couleur==0)
	{
		for(x=0;x<pionnoir.length;x++)
		{
			if($(pionnoir[x]).hasClass('roi'))
			{
				roi=pionnoir[x];
			}
		}
	}
	else
	{
		for(x=0;x<pionblanc.length;x++)
		{
			if($(pionblanc[x]).hasClass('roi'))
			{
				roi=pionblanc[x];
			}
		}
	}
	for(x=0;x<8;x++)
	{
		if($(roi).hasClass('c'+x))
		{
			col=x;
		}
		if($(roi).hasClass('.l'+x))
		{
			lig=x;
		}
	}
	if(col<7)
	{
		if(lig<7)
		{
			tab[taille]=echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0];
			taille++;
		}
		tab[taille]=echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig)+'')[0];
		taille++;
		if(lig>0)
		{
			tab[taille]=echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-1)+'')[0];
			taille++;
		}
	}
	if(lig<7)
	{
		tab[taille]=echequier.getElementsByClassName('c'+(col)+' .l'+(lig+1)+'')[0];
		taille++;
		if(col>0)
		{
				tab[taille]=echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0];
				taille++;
		}
	}
	if(lig>0)
	{
		if(col>0)
		{
			tab[taille]=echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-1)+'')[0];
			taille++;
		}
		tab[taille]=echequier.getElementsByClassName('c'+(col)+' .l'+(lig-1)+'')[0];
		taille++;
	}
	if(col>0)
	{
		tab[taille]=echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig)+'')[0];
		
		taille++;
	}
	for(x=0;x<taille;x++)
	{
		if($(tab[x]).hasClass('noir'))
		{
			tab[x+taille]=0;
		}
		else if($(tab[x]).hasClass('blanc'))
		{
			tab[x+taille]=1;	
		}
		else
		{
			tab[x+taille]=2;
		}
	}
	for(x=0;x<taille;x++)
	{
		if(tab[x+taille]!=couleur)
		{
			if((couleur==0)&&(($(tab[x]).hasClass('impossiblenp'))||($(tab[x]).hasClass('impossiblenc'))||($(tab[x]).hasClass('impossiblent'))||($(tab[x]).hasClass('impossiblenrei'))||($(tab[x]).hasClass('impossiblenr'))||($(tab[x]).hasClass('impossiblenf'))||(tab[x+taille]==1)))
			{
				bloque++;
				impossible++;
			}
			if((couleur==1)&&(($(tab[x]).hasClass('impossiblebp'))||($(tab[x]).hasClass('impossiblebc'))||($(tab[x]).hasClass('impossiblebt'))||($(tab[x]).hasClass('impossiblebrei'))||($(tab[x]).hasClass('impossiblebr'))||($(tab[x]).hasClass('impossiblebf')))||(tab[x+taille]==0))
			{
				bloque++;
				impossible++;
			}
		}
		else if(tab[x+taille]==couleur)
		{
			encadre++;
		}
	}
	if(bloque==taille)
	{
		tour=couleur;
		perdu();
	}
	if(impossible>0)
	{
		bloque=bloque+encadre;
	}
	if(bloque==taille)
	{
		if(couleur==0)
		{
			$("#joueur1").addClass('echec');
		}
		else
		{
			$("#joueur2").addClass('echec');
		}
	}
	else
	{
		if(couleur==0)
		{
			$("#joueur1").removeClass('echec');
		}
		else if(couleur==1)
		{
			$("#joueur2").removeClass('echec');
		}
	}
}

//permet de definir les deplacements legaux des pions
function legalpion( col, lig,donne,couleur)
{
	var verif,verifc,tab=new Array;
	if($(actif).hasClass('pion')&&$(actif).hasClass('noir'))
	{
		tab[0]=echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-1)+'')[0];
		tab[1]=echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-1)+'')[0];
		if($(tab[0]).hasClass('noir'))
		{
			tab[3]=0;
		}
		else if($(tab[0]).hasClass('blanc'))
		{
			tab[3]=1;	
		}
		else
		{
			tab[3]=2;
		}
		if($(tab[1]).hasClass('noir'))
		{
			tab[4]=0;
		}
		else if($(tab[1]).hasClass('blanc'))
		{
			tab[4]=1;	
		}
		else
		{
			tab[4]=2;
		}
		if(tab[3]!=1-couleur&&tab[4]!=1-couleur)
		{
			verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-1)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}	
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc==2)
			{
				possible[0]=verif;
				if($(donne).hasClass('nonjoue'))
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-2)+'')[0];
					if($(verif).hasClass('noir'))
					{
						verifc=0;
					}	
					else if($(verif).hasClass('blanc'))
					{
						verifc=1;	
					}
					else
					{
						verifc=2;
					}
					if(verifc==2)
					{
						possible[1]=verif;
					}
				}
			}
		}
		else if(tab[3]==1-couleur&&tab[4]==1-couleur)
		{
			possible[0]=tab[0];
			possible[1]=tab[1];
		}
		else if(tab[3]==1-couleur&&tab[4]!=1-couleur)
		{
			possible[0]=tab[0];
		}
		else if(tab[3]!=1-couleur&&tab[4]==1-couleur)
		{
			possible[0]=tab[1];
		}
	}
	if($(actif).hasClass('pion')&&$(actif).hasClass('blanc'))
	{
		tab[0]=echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0];
		tab[1]=echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0];
		if($(tab[0]).hasClass('noir'))
		{
			tab[3]=0;
		}
		else if($(tab[0]).hasClass('blanc'))
		{
			tab[3]=1;	
		}
		else
		{
			tab[3]=2;
		}
		if($(tab[1]).hasClass('noir'))
		{
			tab[4]=0;
		}
		else if($(tab[1]).hasClass('blanc'))
		{
			tab[4]=1;	
		}
		else
		{
			tab[4]=2;
		}
		if(tab[3]!=1-couleur&&tab[4]!=1-couleur)
		{
			verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+1)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}	
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}	
			else
			{
				verifc=2;
			}
			if(verifc==2)
			{
				possible[0]=verif;
			}
			if($(donne).hasClass('nonjoue'))
			{
				verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+2)+'')[0];
				if($(verif).hasClass('noir'))
				{
					verifc=0;
				}
				else if($(verif).hasClass('blanc'))
				{
					verifc=1;	
				}
				else
				{
					verifc=2;
				}	
				if(verifc==2)
				{
					possible[1]=verif;
				}
			}
		}
		else if(tab[3]==1-couleur&&tab[4]==1-couleur)
		{
			possible[0]=tab[0];
			possible[1]=tab[1];
		}
		else if(tab[3]==1-couleur&&tab[4]!=1-couleur)
		{
			possible[0]=tab[0];
		}
		else if(tab[3]!=1-couleur&&tab[4]==1-couleur)
		{
			possible[0]=tab[1];
		}
	}
}

//defini les coups possibles pour les cavaliers
function legalcavalier( c, l,donne,couleur)
{
	if(c<6)
		{
			if(l<7)
			{
				verif=echequier.getElementsByClassName('c'+(c+2)+' .l'+(l-1)+'')[0];
				if($(verif).hasClass('noir'))
				{	
					verifc=0;
				}
				else if($(verif).hasClass('blanc'))
				{
					verifc=1;	
				}	
				else
				{
					verifc=2;
				}
				if(verifc!=couleur)
				{
					possible[0]=verif;
				}
			}
			if(l>0)
			{
				verif=echequier.getElementsByClassName('c'+(c+2)+' .l'+(l-1)+'')[0];
				if($(verif).hasClass('noir'))
				{
					verifc=0;
				}
				else if($(verif).hasClass('blanc'))
				{
					verifc=1;	
				}
				else
				{
					verifc=2;
				}
				if(verifc!=couleur)
				{
					possible[1]=verif;
				}
			}
		}
		if(c>1)
		{
			if(l<7)
			{
				verif=echequier.getElementsByClassName('c'+(c-2)+' .l'+(l+1)+'')[0];
				if($(verif).hasClass('noir'))
				{
					verifc=0;
				}	
				else if($(verif).hasClass('blanc'))
				{
					verifc=1;	
				}
				else
				{
					verifc=2;
				}	
				if(verifc!=couleur)
				{
					possible[2]=verif;
				}
			}
		}
		if(l>0)
		{
			verif=echequier.getElementsByClassName('c'+(c-2)+' .l'+(l-1)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}	
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc!=couleur)
			{
				possible[3]=verif;
			}
		}		
		if(c<7)
		{
		if(l<6)
		{
			verif=echequier.getElementsByClassName('c'+(c+1)+' .l'+(l+2)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}	
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}		
			if(verifc!=couleur)
			{
				possible[4]=verif;
			}	
		}
		if(l>1)
		{
			verif=echequier.getElementsByClassName('c'+(c+1)+' .l'+(l-2)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc!=couleur)
			{
				possible[5]=verif;
			}
		}
	}
	if(c>0)
	{
		if(l<6)
		{
			verif=echequier.getElementsByClassName('c'+(c-1)+' .l'+(l+2)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc!=couleur)
			{
				possible[6]=verif;
			}
		}
		if(l>1)
		{
			verif=echequier.getElementsByClassName('c'+(c-1)+' .l'+(l-2)+'')[0];
			if($(verif).hasClass('noir'))
			{
				verifc=0;
			}
			else if($(verif).hasClass('blanc'))
			{
				verifc=1;	
			}
			else
			{
				verifc=2;
			}
			if(verifc!=couleur)
			{
				possible[7]=verif;
			}			
		}
	}
}
