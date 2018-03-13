//determine les coups non jouables pour l equipe noir
//en verifiant tous les chemins possibles actuel de la couleur blanche
//et ajoutant ou enlevant la classe  de chaque element de la couleur blanche sur le plateau
function limitationnoir(info)
{
	var col,lig,j;

	for(i=0;i<pionblanc.length;i++)
	{
		for(j=0;j<taille;j++)
		{
			if($(pionblanc[i]).hasClass('c'+j))
			{
				col=j;
			}
			if($(pionblanc[i]).hasClass('.l'+j))
			{
				lig=j;
			}
		}
		if(info==1)
		{
			if($(pionblanc[i]).hasClass('pion'))
			{
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0]).addClass('impossiblenp');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0]).addClass('impossiblenp');
			}
			if($(pionblanc[i]).hasClass('cavalier'))
			{
				$(echequier.getElementsByClassName('c'+(col+2)+' .l'+(lig-1)+'')[0]).addClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col+2)+' .l'+(lig-1)+'')[0]).addClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col-2)+' .l'+(lig-1)+'')[0]).addClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col-2)+' .l'+(lig-1)+'')[0]).addClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+2)+'')[0]).addClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-2)+'')[0]).addClass('impossiblenc');	
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+2)+'')[0]).addClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-2)+'')[0]).addClass('impossiblenc');
			}
			if($(pionblanc[i]).hasClass('roi'))
			{
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig)+'')[0]).addClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-1)+'')[0]).addClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0]).addClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig)+'')[0]).addClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig-1)+'')[0]).addClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig+1)+'')[0]).addClass('impossiblenr');	
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0]).addClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-1)+'')[0]).addClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig)+'')[0]).addClass('impossiblenr');
			}
			if($(pionblanc[i]).hasClass('tour'))
			{
				var verifc,bloque=0,x=1,verif;
				while((lig+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+x)+'')[0];
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
					$(verif).addClass('impossiblent');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(0<=(lig-x)&&bloque==0)
				{				
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-x)+'')[0];
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
					$(verif).addClass('impossiblent');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((col-x)>=0&&(bloque==0))
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblent');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((col+x)<=8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblent');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
			if($(pionblanc[i]).hasClass('reine'))
			{
				bloque=0;
				x=1;
				while((lig+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+x)+'')[0];
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
					$(verif).addClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(0<=(lig-x)&&bloque==0)
				{				
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-x)+'')[0];
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
					$(verif).addClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col-x)>=0&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(((lig+x)<8) && (bloque==0) && ((col+x)<8))
					{
						verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig-x)+'')[0];
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
						$(verif).addClass('impossiblenrei');
						if(verifc!=2)
						{
								bloque=1;
						}
						
						x++;
					}
					bloque=0;
					x=1;
					while((0<=(lig-x)) && (bloque==0) && (0<=(col-x)))
					{				
						verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig-x)+'')[0];
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
						$(verif).addClass('impossiblenrei');
						if(verifc!=2)
						{
								bloque=1;
						}
						
						x++;
					}
					 bloque=0;
					x=1;
					while((0<=(col-x))&& (bloque==0) && ((lig+x)<8))
					{
						verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig+x)+'')[0];
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
						$(verif).addClass('impossiblenrei');
						if(verifc!=2)
						{
								bloque=1;
						}
						
						x++;
					}
					 bloque=0;
					x=1;
					while(((col+x)<8) && (bloque==0) && ((lig-x)>=0))
					{
						verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig+x)+'')[0];
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
						$(verif).addClass('impossiblenrei');
						if(verifc!=2)
						{
								bloque=1;
						}
						
						x++;
					}
			}
			if($(pionblanc[i]).hasClass('fou'))
			{
				bloque=0;
				x=1;
				while(((lig-x)>=0) && (bloque==0) && ((col+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig-x)+'')[0];
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
					$(verif).addClass('impossiblenf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((0<=(lig-x)) && (bloque==0) && (0<=(col-x)))
				{				
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig-x)+'')[0];
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
					$(verif).addClass('impossiblenf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((0<=(col-x))&& (bloque==0) &&((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig+x)+'')[0];
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
					$(verif).addClass('impossiblenf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while(((col+x)<8) && (bloque==0) && ((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig+x)+'')[0];
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
					$(verif).addClass('impossiblenf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
		}
		else
		{
			if($(pionblanc[i]).hasClass('pion'))
			{
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0]).removeClass('impossiblenp');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0]).removeClass('impossiblenp');
			}
			if($(pionblanc[i]).hasClass('cavalier'))
			{
				$(echequier.getElementsByClassName('c'+(col+2)+' .l'+(lig-1)+'')[0]).removeClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col+2)+' .l'+(lig-1)+'')[0]).removeClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col-2)+' .l'+(lig-1)+'')[0]).removeClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col-2)+' .l'+(lig-1)+'')[0]).removeClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+2)+'')[0]).removeClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-2)+'')[0]).removeClass('impossiblenc');	
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+2)+'')[0]).removeClass('impossiblenc');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-2)+'')[0]).removeClass('impossiblenc');
			}
			if($(pionblanc[i]).hasClass('tour'))
			{
				while((lig+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblent');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(0<=(lig-x)&&bloque==0)
				{				
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblent');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col-x)>=0&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+lig+'')[0];
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
					$(verif).removeClass('impossiblent');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblent');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
			if($(pionblanc[i]).hasClass('roi'))
			{
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig)+'')[0]).removeClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-1)+'')[0]).removeClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0]).removeClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig)+'')[0]).removeClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig-1)+'')[0]).removeClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig+1)+'')[0]).removeClass('impossiblenr');	
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0]).removeClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-1)+'')[0]).removeClass('impossiblenr');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig)+'')[0]).removeClass('impossiblenr');
			}
			bloque==0;
			x=1;
			if($(pionblanc[i]).hasClass('reine'))
			{
				while((lig+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(0<=(lig-x)&&bloque==0)
				{				
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((col-x)>=0&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+lig+'')[0];
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
					$(verif).removeClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				while(((lig-x)>=0) && (bloque==0) && ((col+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((0<=(lig-x)) && (bloque==0) && (0<=(col-x)))
				{				
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((0<=(col-x))&& (bloque==0) && ((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while(((col+x)<8) && (bloque==0) && ((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblenrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
			if($(pionblanc[i]).hasClass('fou'))
			{
				bloque=0;
				x=1;
				while(((lig-x)>=0) && (bloque==0) && ((col+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblenf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((0<=(lig-x)) && (bloque==0) && (0<=(col-x)))
				{				
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblenf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((0<=(col-x))&& (bloque==0) &&((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblenf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while(((col+x)<8) && (bloque==0) && ((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblenf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
		}
	}
}

//determine les coups non jouables pour l equipe blanche
//en verifiant tous les chemins possibles actuel de la couleur noir
//et ajoutant ou enlevant la classe  de chaque element de la couleur noir sur le plateau
function limitationblanc(info)
{
	var col,lig,j;

	for(i=0;i<pionnoir.length;i++)
	{
		for(j=0;j<taille;j++)
		{
			if($(pionnoir[i]).hasClass('c'+j))
			{
				col=j;
			}
			if($(pionnoir[i]).hasClass('.l'+j))
			{
				lig=j;
			}
		}
		if(info==1)
		{
			if($(pionnoir[i]).hasClass('pion'))
			{
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-1)+'')[0]).addClass('impossiblebp');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-1)+'')[0]).addClass('impossiblebp');
			}
			if($(pionnoir[i]).hasClass('cavalier'))
			{
				$(echequier.getElementsByClassName('c'+(col+2)+' .l'+(lig-1)+'')[0]).addClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col+2)+' .l'+(lig-1)+'')[0]).addClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col-2)+' .l'+(lig-1)+'')[0]).addClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col-2)+' .l'+(lig-1)+'')[0]).addClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+2)+'')[0]).addClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-2)+'')[0]).addClass('impossiblebc');	
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+2)+'')[0]).addClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-2)+'')[0]).addClass('impossiblebc');
			}
			if($(pionnoir[i]).hasClass('roi'))
			{
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig)+'')[0]).addClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-1)+'')[0]).addClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0]).addClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig)+'')[0]).addClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig-1)+'')[0]).addClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig+1)+'')[0]).addClass('impossiblebr');	
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0]).addClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-1)+'')[0]).addClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig)+'')[0]).addClass('impossiblebr');
			}
			if($(pionnoir[i]).hasClass('tour'))
			{
				var verifc,bloque=0,x=1,verif;
				while((lig+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+x)+'')[0];
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
					$(verif).addClass('impossiblebt');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(0<=(lig-x)&&bloque==0)
				{				
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-x)+'')[0];
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
					$(verif).addClass('impossiblebt');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col-x)>=0&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblebt');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblebt');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
			if($(pionnoir[i]).hasClass('reine'))
			{
				bloque=0;
				x=1;
				while((lig+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+x)+'')[0];
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
					$(verif).addClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(0<=(lig-x)&&bloque==0)
				{				
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-x)+'')[0];
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
					$(verif).addClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col-x)>=0&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(((lig+x)<8) && (bloque==0) && ((col+x)<8))
					{
						verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig-x)+'')[0];
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
						$(verif).addClass('impossiblebrei');
						if(verifc!=2)
						{
								bloque=1;
						}
						
						x++;
					}
					bloque=0;
					x=1;
					while((0<=(lig-x)) && (bloque==0) && (0<=(col-x)))
					{				
						verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig-x)+'')[0];
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
						$(verif).addClass('impossiblebrei');
						if(verifc!=2)
						{
								bloque=1;
						}
						
						x++;
					}
					 bloque=0;
					x=1;
					while((0<=(col-x))&& (bloque==0) && ((lig+x)<8))
					{
						verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig+x)+'')[0];
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
						$(verif).addClass('impossiblebrei');
						if(verifc!=2)
						{
								bloque=1;
						}
						
						x++;
					}
					 bloque=0;
					x=1;
					while(((col+x)<8) && (bloque==0) && ((lig-x)>=0))
					{
						verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig+x)+'')[0];
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
						$(verif).addClass('impossiblebrei');
						if(verifc!=2)
						{
								bloque=1;
						}
						
						x++;
					}
			}
			if($(pionnoir[i]).hasClass('fou'))
			{
				bloque=0;
				x=1;
				while(((lig-x)>=0) && (bloque==0) && ((col+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig-x)+'')[0];
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
					$(verif).addClass('impossiblebf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((0<=(lig-x)) && (bloque==0) && (0<=(col-x)))
				{				
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig-x)+'')[0];
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
					$(verif).addClass('impossiblebf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((0<=(col-x))&& (bloque==0) &&((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig+x)+'')[0];
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
					$(verif).addClass('impossiblebf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while(((col+x)<8) && (bloque==0) && ((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig+x)+'')[0];
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
					$(verif).addClass('impossiblebf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
		}
		else
		{
			if($(pionnoir[i]).hasClass('pion'))
			{
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0]).removeClass('impossiblebp');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0]).removeClass('impossiblebp');
			}
			if($(pionnoir[i]).hasClass('cavalier'))
			{
				$(echequier.getElementsByClassName('c'+(col+2)+' .l'+(lig-1)+'')[0]).removeClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col+2)+' .l'+(lig-1)+'')[0]).removeClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col-2)+' .l'+(lig-1)+'')[0]).removeClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col-2)+' .l'+(lig-1)+'')[0]).removeClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+2)+'')[0]).removeClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-2)+'')[0]).removeClass('impossiblebc');	
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+2)+'')[0]).removeClass('impossiblebc');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-2)+'')[0]).removeClass('impossiblebc');
			}
			if($(pionnoir[i]).hasClass('tour'))
			{
				while((lig+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblebt');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(0<=(lig-x)&&bloque==0)
				{				
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblebt');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col-x)>=0&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+lig+'')[0];
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
					$(verif).removeClass('impossiblebt');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblebt');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
			if($(pionnoir[i]).hasClass('roi'))
			{
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig)+'')[0]).removeClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig-1)+'')[0]).removeClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col+1)+' .l'+(lig+1)+'')[0]).removeClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig)+'')[0]).removeClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig-1)+'')[0]).removeClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col)+' .l'+(lig+1)+'')[0]).removeClass('impossiblebr');	
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig+1)+'')[0]).removeClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig-1)+'')[0]).removeClass('impossiblebr');
				$(echequier.getElementsByClassName('c'+(col-1)+' .l'+(lig)+'')[0]).removeClass('impossiblebr');
			}
			bloque==0;
			x=1;
			if($(pionnoir[i]).hasClass('reine'))
			{
				while((lig+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while(0<=(lig-x)&&bloque==0)
				{				
					verif=echequier.getElementsByClassName('c'+col+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((col-x)>=0&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+lig+'')[0];
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
					$(verif).removeClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((col+x)<8&&bloque==0)
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+lig+'')[0];
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
					$(verif).addClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				while(((lig-x)>=0) && (bloque==0) && ((col+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((0<=(lig-x)) && (bloque==0) && (0<=(col-x)))
				{				
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((0<=(col-x))&& (bloque==0) && ((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while(((col+x)<8) && (bloque==0) && ((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblebrei');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
			if($(pionnoir[i]).hasClass('fou'))
			{
				bloque=0;
				x=1;
				while(((lig-x)>=0) && (bloque==0) && ((col+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblebf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				bloque=0;
				x=1;
				while((0<=(lig-x)) && (bloque==0) && (0<=(col-x)))
				{				
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig-x)+'')[0];
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
					$(verif).removeClass('impossiblebf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while((0<=(col-x))&& (bloque==0) &&((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col-x)+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblebf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
				 bloque=0;
				x=1;
				while(((col+x)<8) && (bloque==0) && ((lig+x)<8))
				{
					verif=echequier.getElementsByClassName('c'+(col+x)+' .l'+(lig+x)+'')[0];
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
					$(verif).removeClass('impossiblebf');
					if(verifc!=2)
					{
							bloque=1;
					}
					
					x++;
				}
			}
		}
	}
}
