from flask import Flask, render_template, request, g, session
import sqlite3
from random import shuffle, choice

app = Flask("Chinook")
app.secret_key = ''.join([choice('abcdefghijklmnopqrst') for i in range(10)])


################################################
########## DATABASE ############################
################################################

DATABASE = "database/chinook.db"

def get_db():
    """
    Crée la connexion vers la bdd
    Nécessaire avant chaque requête
    """
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_connection(exception):
    """
    Ferme la connexion vers la bdd
    """
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


def selection(requete, args=(), one=False):
    """
    Exécute une requête auprès de la bdd (après l'avoir créée)
    """
    cur = get_db().execute(requete, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

################################################
################################################
################################################









################################################
########## PAGES WEB ###########################
################################################

random_color = [
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
]

#L'accueil
@app.route('/')
@app.route('/index')
def accueil():
    requete = """
    SELECT *
    FROM artists
    WHERE 1
    """
    if 'panier' not in session : # Création d'une session
        session['panier'] = []
        c_tmp = choice(random_color)
        session['color'] = c_tmp
        session['panierAvailable'] = 'text-gray-400'
        session['panierLink'] = '#'
    liste = selection(requete)
    shuffle(liste)
    print(session)
    return render_template('index.jinja', artistes = liste)

#L'accueil
@app.route('/artistes')
def accueil_bis():
    requete = """
    SELECT *
    FROM artists
    WHERE 1
    """
    if 'panier' not in session : # Création d'une session
        session['panier'] = []
        c_tmp = choice(random_color)
        session['color'] = c_tmp
        session['panierAvailable'] = 'text-gray-400'
        session['panierLink'] = '#'
    liste = selection(requete)
    shuffle(liste)
    return render_template('indexArtistes.jinja', artistes = liste)



#Acceuil pour les albums
@app.route('/albums')
def accueilAlbums():
    requete = """
    SELECT *
    FROM albums
    WHERE 1
    """
    if 'panier' not in session : # Création d'une session
        session['panier'] = []
        c_tmp = choice(random_color)
        session['color'] = c_tmp
        session['panierAvailable'] = 'text-gray-400'
        session['panierLink'] = '#'
    liste = selection(requete)
    shuffle(liste)
    return render_template('index_albums.jinja', albums=liste)



# Page de l'album unique
@app.route('/artiste')
def artiste_page() :
    artiste = request.args.get('artiste', default='Error404', type=str)
    requete = """
    SELECT albums.Title
    FROM artists
    JOIN albums
    ON artists.ArtistId = albums.ArtistId
    WHERE artists.Name = ?
    """
    if 'panier' not in session : # Création d'une session
        session['panier'] = []
        c_tmp = choice(random_color)
        session['color'] = c_tmp
        session['panierAvailable'] = 'text-gray-400'
        session['panierLink'] = '#'
    album = selection(requete, (artiste,))
    return render_template('artiste.jinja', nomArtiste=artiste, albums=album)



# Page de l'album unique
@app.route('/album')
def albumPage() :
    artiste = request.args.get('artiste', default='Error404', type=str)
    album  = request.args.get('album', default='Error404', type=str)
    requete = """
    SELECT *
    FROM albums
    JOIN tracks
    ON albums.AlbumId = tracks.AlbumId
    WHERE albums.Title = ?
    """
    if 'panier' not in session : # Création d'une session
        session['panier'] = []
        c_tmp = choice(random_color)
        session['color'] = c_tmp
        session['panierAvailable'] = 'text-gray-400'
        session['panierLink'] = '#'
    tracks = selection(requete, (album,))
    return render_template('album.jinja', nomAlbum=album, nomArtiste=artiste, tracks=tracks)


@app.route('/commande', methods=['POST'])
def pageAchat() :
    data = request.form
    noms = [nom for nom in data]
    valeurs = [data[n] for n in noms]
    [session['panier'].append((nom, valeur)) for nom, valeur in zip(noms, valeurs)]
    total = sum([float(v[1]) for v in session['panier']])
    total = round(total,2)
    session['panierLink'] = '/commandePanier'
    session['panierAvailable'] = f"text-{ session['color'] }-500 hover:text-{ session['color'] }-800"
    return render_template('achat.jinja', total=total)


@app.route('/commandePanier')
def pagePanier() :
    total = sum([float(v[1]) for v in session['panier']])
    total = round(total,2)
    return render_template('achat.jinja', total=total)

#L'accueil
@app.route('/test')
def test_zone():
    return render_template('test.html')

################################################
################################################
################################################











################################################
########## MAIN PROG. ##########################
################################################

# Le corps du programme
if __name__=='__main__':
    # Serveur visible sur ce poste uniquement et modifiable à la volée (mode debug actif)
    #app.run(debug=True)

    app.run() # wow la version finale !