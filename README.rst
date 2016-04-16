======================
Super popups for Django
======================

Let ``super-popups`` show fancy messages to your visitors

.. image:: http://www.educalleja.es/misc/super_popups/ok.jpg

.. image:: http://www.educalleja.es/misc/super_popups/ko.jpg

.. image:: http://www.educalleja.es/misc/super_popups/warn.jpg


Requirements
------------

- Django >= 1.8
- Jquery 1.12
- Font-awesome 4.5.0


Installation
------------

1. Install using pip:

   ``pip install django-super-popups``

   Alternatively, you can install download or clone this repo and call ``pip install -e .``.

2. Add to INSTALLED_APPS in your ``settings.py``:

   ``'super-popups',``

3. In your templates, load the following ``css`` and ``js`` files:

   .. code:: Django

    <link rel="stylesheet" type="text/css" media="screen" href="{% static "super_popups/superpopups.css" %}" />
    <script type="text/javascript" src="{% static "super_popups/superpopups.js" %}"></script>

Usage
------------

Call your website with the following GET variables to display a message:

    http://example.com?tyT=ok&msT=This is the text
    
Which will display the following popup:

.. image:: http://www.educalleja.es/misc/super_popups/example1.jpg

If you do not want to define the popup using GET variables, you can define the style and content with the following javascript variable.

   .. code:: javascript

    var superpopups = {
        tyT: "ok",  // MANDATORY. Possible values are `ok`, `ko` and `warn`
        msT: "Everything is great!",  // MANDATORY  
        autohide: 5000,   // OPTIONAL. When set, the message will disappear after the defined interval in ms.
    }




Example template
----------------

   .. code:: Django

    {# Web code #}
    
    <head>
        <link rel="stylesheet" type="text/css" media="screen" href="{% static "super_popups/superpopups.css" %}" />
    </head>
    <body>
        <script>
            var superpopups = {
                tyT: "ok",
                msT: "This message will appear at the top of your website for only 5 seconds!",
                autohide: 5000,   // The message will disappear in 5000 ms.
            }
        </script>
        <script type="text/javascript" src="{% static "super_popups/superpopups.js" %}"></script>
    </body>


Documentation
-------------

This is all the documentation we have :)


Bugs and suggestions
--------------------

If you have found a bug or if you have a request for additional functionality, please use the issue tracker on GitHub.

https://github.com/educalleja/django-super-popups/issues


License
-------

You can use this under Apache 2.0. See `LICENSE
<LICENSE>`_ file for details.


Author
------

Original author and maintained by `Eduardo Calleja <http://www.educalleja.es>`_.
