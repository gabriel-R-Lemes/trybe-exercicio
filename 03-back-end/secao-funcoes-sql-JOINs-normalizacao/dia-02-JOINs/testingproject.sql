SELECT * FROM SpotifyClone.Seguindo;
SELECT * FROM SpotifyClone.Album;
SELECT * FROM SpotifyClone.Artista;
SELECT * FROM SpotifyClone.Musicas;
SELECT * FROM SpotifyClone.Planos;
SELECT * FROM SpotifyClone.Reproducoes;



SELECT  (
        SELECT (u.username)
        FROM   SpotifyClone.Users u
        ) AS usuario,
        (
        SELECT COUNT(musica_id)
        FROM   SpotifyClone.Reproducoes r
        WHERE SpotifyClone.Users.user_id = r.user_id
        ) AS qt_de_musicas_ouvidas,
        (
        SELECT SUM(duracao)
        FROM   SpotifyClone.Musicas m
        WHERE m.musica_id = SpotifyClone.Reproducoes.musica_id
        ) AS albuns;
        
        
  SELECT u.username AS usuario,  COUNT(rep.user_id) AS qt_de_musicas_ouvidas, SUM(m.duracao) AS total_minutos
  FROM SpotifyClone.Users u
  RIGHT JOIN SpotifyClone.Reproducoes rep
  ON u.user_id = rep.user_id
  RIGHT JOIN SpotifyClone.Musicas m
  ON m.musica_id = rep.musica_id;
    
SELECT username AS usuario,
       (
	     SELECT COUNT(*) FROM SpotifyClone.Reproducoes rep WHERE rep.user_id = u.user_id
	   ) AS qt_de_musicas_ouvidas,
       (
	     SELECT SUM(duracao) FROM SpotifyClone.Musicas m WHERE m.musica_id = SpotifyClone.Reproducoes.musica_id 
	   ) AS total_minutos
FROM SpotifyClone.Users u;

